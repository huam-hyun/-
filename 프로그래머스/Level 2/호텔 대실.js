/**
 * 예약 시간을 받아 최소로 필요한 방의 개수를 반환하는 함수
 * @param {String[][]} book_time 예약 입실시간과 퇴실시간이 있는 배열
 * @returns 최소로 필요한 방의 개수
 */

// 성공
// book_time을 분으로 환산한 후 checkIn 시간으로 오름차순 정렬한다.
// rooms에는 checkOut 시간을 저장한다.
// 만약 checkIn 시간이 rooms에 있는 checkOut + 청소 시간보다 늦다면 해당 시간대에 입실할 수 있다.
// 만약 없다면 새로운 방이 하나 더 필요하다는 뜻
// 최종적으로 사용한 방의 개수를 return 한다.
function solution(book_time) {
  const CLEAR_ROOM_TIME = 10
  const rooms = []
  
  const formatTime = (time) => {
      const [hour, minute] = time.split(':').map(Number)
      return hour * 60 + minute
  }
  
  book_time = book_time.map((time) => time.map(formatTime))
  book_time.sort((a, b) => a[0] - b[0])
  
  for (const time of book_time) {
      const [checkIn, checkOut] = time
      const idx = rooms.findIndex(room => room + CLEAR_ROOM_TIME <= checkIn)
      if (idx === -1) {
          rooms.push(checkOut)
      } else {
          rooms[idx] = checkOut
      }
  }
  
  return rooms.length
}