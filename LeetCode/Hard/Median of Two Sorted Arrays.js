// 성공
// 처음엔 포인터 4개로 하려 했으나 구현이 어려워 다른 방법을 찾음
// 합병 정렬을 생각하여 구현
// 두 배열을 합쳐서 합병하였는데 생각해보니 두 배열이 정렬돼 있음을 깨닳음
// 단순히 두 배열을 합쳐서 중간 값을 찾으면 되는 거였음

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const mid = Math.floor((m + n - 1) / 2);
    const merged = merge(nums1, nums2);

    if((m + n) % 2) return merged[mid];
    else return (merged[mid] + merged[mid + 1]) / 2;

    function merge(array1, array2){
        const result = [];

        while(array1.length && array2.length){
            if(array1[0] < array2[0]) result.push(array1.shift());
            else result.push(array2.shift());
        }

        while(array1.length) result.push(array1.shift());
        while(array2.length) result.push(array2.shift());

        return result;
    }
};