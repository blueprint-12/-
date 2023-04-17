// * 2023 03 23 프로그래머스 lv.0 문제 풀이 (총 5개)

// * 1.문제이름: 옹알이(1)

// 문제 설명
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

//입출력 예 설명
// 입출력 예 #1

// ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.
// 입출력 예 #2

// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.

// ! 유의사항
// 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.
// TODO: babbling은 문자열을 담은 배열, 해당 요소는 babywords의 조합일수도 아닐수도 있다. 조합이라면 answer에 +1를 한다.

//? 문법 정리
// .replace(A,B): 문자열 중에 A를 B로 치환하여 반환
// replaceAll(pattern정규식, replacement): 문자열 중에 모든 A를 B로 치환하여 반환
//

{
  function solution(babbling) {
    let answer = 0;
    let can = ['aya', 'ye', 'woo', 'ma'];

    for (let i in babbling) {
      let init = babbling[i];

      for (let j in can) {
        if (babbling[i].includes(can[j])) {
          init = init.replace(can[j], 'X'); // 할 수 있는 단어는 X로 치환
        }
      }

      // g옵션: 모든 영역
      // i옵션: 대소문자 구문없이
      init = init.replace(/X/gi, ''); // X를 모두 공백으로 치환하고 나서
      if (init.length === 0) {
        // 공백이 되면 answer에 추가
        answer += 1;
      }
    }
    return answer;
  }
}

// 다른 사람 풀이(정규 표현식) 1
// ? 문자열 비교의 마스터 키 => 정규식
{
  function solution(babbling) {
    let answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach((word) => {
      if (regex.test(word)) answer++;
    });

    return answer;
  }
}

// 다른 사람 풀이 2
// ? set활용 set.has() 를 통해서 값이 포함되는 지 확인함
{
  function solution(babbling) {
    const wordSet = new Set(['aya', 'ye', 'woo', 'ma']);
    let result = 0;

    for (const word of babbling) {
      let remainWord = '';
      let prevWord = '';
      for (const char of word) {
        remainWord += char;
        if (wordSet.has(remainWord)) {
          if (remainWord === prevWord) break;
          prevWord = remainWord;
          remainWord = '';
        }
      }
      if (remainWord === '') result++;
    }
    return result;
  }
}

//============================================================================

// * 2.문제이름: 개미군단

// 문제 설명
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// hp는 자연수(양의 정수)입니다.
// 0 ≤ hp ≤ 1000
//? 자연수에 0도 포함인가...?

// TODO: 장군개미 5, 병정개미 3, 일개미 => 사냥감의 체력 hp(매개변수), 최소한의 병력으로 구성하여 몇 마리의 개미가 필요한지 return

// * hp를 5로 최대한 나누고 나머지를 3으로 나누고 나눠지지않으면 그다음에 1로 나눈다.
// 몫 -> Math.floor( 23 / 5) 혹은 parseInt 사용하면 됨
// 나머지 -> r = 13 % 5

// 풀이: 결국 구해야하는 건 몫, (이전 연산의 나머지 값에 대한)몫, 나머지 의 합이므로

{
  function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
  }
}

// ? ~~(물결x2)은 Math.floor()로 대신 사용가능하다. 하지만 가독성때문에 안쓸듯

//============================================================================

// * 3.문제이름: 대문자와 소문자

// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

//1 ≤ my_string의 길이 ≤ 1,000
// my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
{
  function solution(my_string) {
    let arr = [];
    for (let i = 0; i < my_string.length; i++) {
      //대문자라면 소문자로 변경하여
      if (my_string[i] === my_string[i].toUpperCase()) {
        arr.push(my_string[i].toLowerCase());
      } else {
        //소문자라면 대문자로 변경하여 arr 에 넣기
        arr.push(my_string[i].toUpperCase());
      }
    }
    return arr.join('');
  }
}
//다른 사람 풀이
//? for loop말고 for of 루프를 썼다. 현명한듯
// arr 를 따로 만들지않고 누적하는 식으로 사용
{
  function solution(my_string) {
    var answer = '';
    for (let c of my_string)
      answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
  }
}

//============================================================================

// * 4.문제이름: 암호해독
// 문제 설명
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ cipher의 길이 ≤ 1,000
// 1 ≤ code ≤ cipher의 길이
// cipher는 소문자와 공백으로만 구성되어 있습니다.
// 공백도 하나의 문자로 취급합니다

// 입출력 예
// cipher	code	result
// "dfjardstddetckdaccccdegk"	4	"attack"
// "pfqallllabwaoclk"	2	"fallback"

// TODO: code 가 배수, cipher 는 암호화된 문자열, 공백도 문자열로 취급
// 공백도 문자열이니까 for of 쓰면 안될듯
// 구조분해로 배열로 만든뒤, filter 메서드 활용 그 다음 문자열로 재조합
{
  const solution = (cipher, code) =>
    [...cipher].filter((a, i) => (i + 1) % code === 0).join('');
}

// 다른 사람 풀이( 원래 내가 하려던 것)
//for문 활용
{
  function solution(cipher, code) {
    var answer = '';
    for (let i = code - 1; i < cipher.length; i += code) {
      answer += cipher[i];
    }
    return answer;
  }
}
//============================================================================

// * 5.문제이름: 가위 바위 보
// 문제 설명
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
// ! 숫자가 남긴 문자열
// ? 가위 2 -> 0,  바위 0-> 5,  보 5 -> 2
// ? rsp 는 숫자 0,2,5로 이루어져있음
// 이기는 애를 return해주면된다.
{
  function solution(rsp) {
    return Array.from(rsp)
      .map((v) => {
        switch (+v) {
          case 2:
            return 0;
          case 0:
            return 5;

          default:
            return 2;
        }
      })
      .join('');
  }
}

// 다른 사람 풀이
// ? 너무 좋았다 배열을 객체로 만들어서 활용할 방법을 사용하다니.. 이 부분까지 생각이 가긴했는데 코드로 직접 구현할 생각을 하지 못했다. 또한, 객체로 만들기보단 배열로 생각했다.
// 배열에 담고 해당 배열의 +1 인덱스의 값을 넣어주면 되지 않나 생각했는데 아예 대치되는 key: value로 잡아주면 더 쉽게 구현할 수 있었다.
// ! 어렵게 생각하지 말 것
{
  /*
       가위는 2 바위는 0 보는 5
      */
  function solution(rsp) {
    let arr = {
      2: 0,
      0: 5,
      5: 2,
    };
    var answer = [...rsp].map((v) => arr[v]).join('');
    return answer;
  }
}

// 다른 사람 풀이 2
// 나쁘지않지만 위의 풀이가 더 맘에 든다.
{
  function solution(rsp) {
    return rsp
      .split('')
      .map((v) => (v === '2' ? 0 : v === '0' ? 5 : 2))
      .join('');
  }
}
