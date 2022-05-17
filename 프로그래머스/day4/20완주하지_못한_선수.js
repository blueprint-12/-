/*
✨완주하지 못한 선수
✨문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다.
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

✨제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다. 
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
// completeArr.length -1  =  particiArr.length
// 참가자 동명이인 있을 수 있음 

✨입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

✨입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

//키워드: 문자열 정렬 -> sort() 메소드

// 2중 for문을 돌리면 성능부하 때문에 문제해결안됨
// for문을 한 번만 돌리기위해서 sort()를 통해 문자열 배열을 정렬
function solution(particiArr, completeArr) {
  // 배열의 요소를 sort를 통해 정렬한다.
  particiArr.sort();
  completeArr.sort();
  // 정렬을해서 요소들을 맞춰주면 한번만 for문을 돌려주면 된다.
  // 같은 요소에 한 자리만 큰 게 참가자배열이므로 완주자배열의 요소와 맞지않는 i를 찾아서 반환하면 된다.
  for (let i = 0; i < particiArr.length; i++) {
    if (particiArr[i] !== completeArr[i]) {
      return particiArr[i];
    }
  }
}
