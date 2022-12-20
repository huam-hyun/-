// 성공
// DFS만 구현할 줄 안다면 쉽게 풀리는 문제였다.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const unlocked = new Set();
    let availRooms = new Set(rooms[0]);

    unlocked.add(0);

    while(availRooms.size){
        const keys = availRooms;
        const nextRooms = new Set();

        keys.forEach(key => {
            if(!unlocked.has(key)){
                unlocked.add(key);
                
                rooms[key].forEach(room => nextRooms.add(room));
            }
        });

        availRooms = nextRooms;
    }

    return unlocked.size < rooms.length ? false : true;
};