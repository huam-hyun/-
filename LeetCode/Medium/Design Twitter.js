// 트위터 객체를 설계하는 문제
// 재밌다!
// postTweet(userId, tweetId) : userId가 tweetId로 새로운 트윗 생성
// getNewsFeed(userId) : userId의 최신 트윗을 10개 불러온다(follow한 유저의 피드 포함)
// follow(followerId, followeeId) : followerId가 followeeId를 팔로우한다
// unfollow(followerId, followeeId) : followerId가 followeeId를 언팔로우한다

var Twitter = function() {
    this.posts = new Map();
    this.followers = new Map();
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.posts.has(userId)) this.posts.set(userId, []);
    const time = this.time;
    
    this.posts.get(userId).push({tweetId, time});
    this.time++;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const follower = this.followers.get(userId) || new Set();
    let user_posts = this.posts.get(userId) || [];

    for(const followerId of follower){
        user_posts = user_posts.concat(this.posts.get(followerId) || []);
    }

    user_posts = user_posts.sort((a, b) => b.time - a.time).slice(0, 10).map(posts => posts.tweetId);

    return user_posts;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followers.has(followerId)) this.followers.set(followerId, new Set());

    this.followers.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(!this.followers.has(followerId)) return;

    this.followers.get(followerId).delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */