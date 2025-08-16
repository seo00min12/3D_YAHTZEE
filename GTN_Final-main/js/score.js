

let scoreBoard = {
  
};

// 모듈 스코프 변수 선언

let currentTurn = 0;
let currentTurn_1p = 0;
let currentTurn_2p = 0;

export function nextTurn() {
  currentTurn++;
  let turnMessage="";
  if (currentTurn % 2 === 1) { // 홀수 턴
    currentTurn_1p++;
    document.getElementById("turnDisplay").textContent = currentTurn_1p;
    console.log("1P 턴 수: ", currentTurn_1p);
    turnMessage="1P 차례입니다";
  } else { // 짝수 턴
    currentTurn_2p++;
    document.getElementById("turnDisplay2").textContent = currentTurn_2p;
    console.log("2P 턴 수: ", currentTurn_2p);
    turnMessage="2P 차례입니다";
  }
  document.getElementById("turnMessage").textContent = turnMessage;
}
  

// 🛑 `savedScores`는 localStorage에서 불러와 저장
export let savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];



// 🟢 점수 불러오기 함수 (최근 점수만 불러오기)
export function loadScores() {
  console.log("🔄 loadScores() 실행됨! (최근 점수만 불러오기)");
  let savedData = localStorage.getItem("savedScores");
  if (!savedData) {
    console.warn("⚠️ 저장된 점수가 없습니다!");
    return;
  }
  let parsedData = JSON.parse(savedData);
  if (!Array.isArray(parsedData) || parsedData.length === 0) {
    console.warn("⚠️ 저장된 점수 형식이 올바르지 않습니다!");
    return;
  }
  // 🔥 가장 최근 점수만 가져오기
  let latestScore = parsedData[parsedData.length - 1];
  console.log("✅ 불러온 최근 점수:", latestScore);

  // 🛑 기존 `savedScores` 배열 비우고 최근 점수만 추가
  savedScores.length = 0;
  savedScores.push(latestScore);

  console.log("✅ `savedScores` 업데이트:", savedScores);
  // 🟢 점수 리스트를 HTML 요소에 추가
  updateScoreDisplay();
}

// 🟢 점수 리스트 업데이트 함수 (최근 점수만 표시)
function updateScoreDisplay() {
    const displayId = currentTurn % 2 === 1 ? 'scoreDisplay' : 'scoreDisplay2';
    const scoreDisplay = document.getElementById(displayId);
    
    if (!scoreDisplay) {
      console.error(`❌ '${displayId}' 요소를 찾을 수 없음!`);
      return;
    }
    
    // 🔥 기존 리스트 초기화
    scoreDisplay.innerHTML = '';
    
    // 🔹 최근 점수만 리스트에 추가
    if (savedScores.length > 0) {
      const listItem = document.createElement('div');
      listItem.textContent = `🎲 최근 게임 점수: ${savedScores[savedScores.length - 1].join(', ')}`;
      scoreDisplay.appendChild(listItem);
    } else {
      scoreDisplay.textContent = "⚠️ 저장된 점수가 없습니다.";
    }
    
    console.log(`✅ ${displayId} 점수 리스트 업데이트 완료! (최근 점수만 표시)`);
  }
  

// 🟢 저장된 점수 표시 함수
export function displayScores() {
  const scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.innerHTML = '저장된 점수: ' + savedScores.join(', ');
}




export function scoreCategory(category) {
  console.log("Original savedScores:", savedScores);
  let dice = savedScores[0];//내부 배열을 가져옴옴
  // 객체의 'value' 속성만 추출
  console.log("Extracted dice values:", dice);

  // savedScores가 비어있으면 더 이상 진행하지 않음
  if (!savedScores || savedScores.length === 0) {
    console.warn("⚠️ savedScores 배열이 비어있습니다. 더 이상 진행하지 않습니다.");
    return;
  }

  if (category === "ones") {
    scoreBoard.ones = countNumbers(dice, 1) * 1;
  } else if (category === "twos") {
    scoreBoard.twos = countNumbers(dice, 2) * 2;
  } else if (category === "threes") {
    scoreBoard.threes = countNumbers(dice, 3) * 3;
  } else if (category === "fours") {
    scoreBoard.fours = countNumbers(dice, 4) * 4;
  } else if (category === "fives") {
    scoreBoard.fives = countNumbers(dice, 5) * 5;
  } else if (category === "sixes") {
    scoreBoard.sixes = countNumbers(dice, 6) * 6;
  } else if (category === "threeOfAKind") {
    if (hasSameValues(dice, 3)) {
      scoreBoard.threeOfAKind = dice.reduce((a, b) => a + b, 0);
    } else {
      scoreBoard.threeOfAKind = 0;
    }
  } else if (category === "fourOfAKind") {
    if (hasSameValues(dice, 4)) {
      scoreBoard.fourOfAKind = dice.reduce((a, b) => a + b, 0);
    } else {
      scoreBoard.fourOfAKind = 0;
    }
  } else if (category === "fullHouse") {
    if (isFullHouse(dice)) {
      scoreBoard.fullHouse = 25;
    } else {
      scoreBoard.fullHouse = 0;
    }
  } else if (category === "smallStraight") {
    if (isSmallStraight(dice)) {
      scoreBoard.smallStraight = 30;
    } else {
      scoreBoard.smallStraight = 0;
    }
  } else if (category === "largeStraight") {
    if (isLargeStraight(dice)) {
      scoreBoard.largeStraight = 40;
    } else {
      scoreBoard.largeStraight = 0;
    }
  } else if (category === "yahtzee") {
    if (hasSameValues(dice, 5)) {
      scoreBoard.yahtzee = 50;
    } else {
      scoreBoard.yahtzee = 0;
    }
  } else if (category === "chance") {
    scoreBoard.chance = dice.reduce((a, b) => a + b, 0);
  }
  //2P 점수 계산

  if (category === "ones2") {
    scoreBoard.ones2 = countNumbers(dice, 1) * 1;
  } else if (category === "twos2") {
    scoreBoard.twos2 = countNumbers(dice, 2) * 2;
  } else if (category === "threes2") {
    scoreBoard.threes2 = countNumbers(dice, 3) * 3;
  } else if (category === "fours2") {
    scoreBoard.fours2 = countNumbers(dice, 4) * 4;
  } else if (category === "fives2") {
    scoreBoard.fives2 = countNumbers(dice, 5) * 5;
  } else if (category === "sixes2") {
    scoreBoard.sixes2 = countNumbers(dice, 6) * 6;
  } else if (category === "threeOfAKind2") {
    if (hasSameValues(dice, 3)) {
      scoreBoard.threeOfAKind2 = dice.reduce((a, b) => a + b, 0);
    } else {
      scoreBoard.threeOfAKind2 = 0;
    }
  } else if (category === "fourOfAKind2") {
    if (hasSameValues(dice, 4)) {
      scoreBoard.fourOfAKind2 = dice.reduce((a, b) => a + b, 0);
    } else {
      scoreBoard.fourOfAKind2 = 0;
    }
  } else if (category === "fullHouse2") {
    if (isFullHouse(dice)) {
      scoreBoard.fullHouse2 = 25;
    } else {
      scoreBoard.fullHouse2 = 0;
    }
  } else if (category === "smallStraight2") {
    if (isSmallStraight(dice)) {
      scoreBoard.smallStraight2 = 30;
    } else {
      scoreBoard.smallStraight2 = 0;
    }
  } else if (category === "largeStraight2") {
    if (isLargeStraight(dice)) {
      scoreBoard.largeStraight2 = 40;
    } else {
      scoreBoard.largeStraight2 = 0;
    }
  } else if (category === "yahtzee2") {
    if (hasSameValues(dice, 5)) {
      scoreBoard.yahtzee2 = 50;
    } else {
      scoreBoard.yahtzee2 = 0;
    }
  } else if (category === "chance2") {
    scoreBoard.chance2 = dice.reduce((a, b) => a + b, 0);
  }
  updateScoreBoard();
  disableCategoryButton(category);

  // 점수 선택 후 savedScores 배열 비우기
  savedScores = [];
  localStorage.removeItem("savedScores");

}

export function updateScoreBoard() {
  document.getElementById("scoreOnes").textContent = scoreBoard.ones || "0";
  document.getElementById("scoreTwos").textContent = scoreBoard.twos || "0";
  document.getElementById("scoreThrees").textContent = scoreBoard.threes || "0";
  document.getElementById("scoreFours").textContent = scoreBoard.fours || "0";
  document.getElementById("scoreFives").textContent = scoreBoard.fives || "0";
  document.getElementById("scoreSixes").textContent = scoreBoard.sixes || "0";
  document.getElementById("scoreThreeOfAKind").textContent = scoreBoard.threeOfAKind || "0";
  document.getElementById("scoreFourOfAKind").textContent = scoreBoard.fourOfAKind || "0";
  document.getElementById("scoreFullHouse").textContent = scoreBoard.fullHouse || "0";
  document.getElementById("scoreSmallStraight").textContent = scoreBoard.smallStraight || "0";
  document.getElementById("scoreLargeStraight").textContent = scoreBoard.largeStraight || "0";
  document.getElementById("scoreYahtzee").textContent = scoreBoard.yahtzee || "0";
  document.getElementById("scoreChance").textContent = scoreBoard.chance || "0";

  // 상단 섹션 합계 계산
  let upperSectionSum =
    (scoreBoard.ones || 0) +
    (scoreBoard.twos || 0) +
    (scoreBoard.threes || 0) +
    (scoreBoard.fours || 0) +
    (scoreBoard.fives || 0) +
    (scoreBoard.sixes || 0);
  scoreBoard.upperSectionTotal = upperSectionSum;
  document.getElementById("upperSectionTotal").textContent = upperSectionSum;

  // 보너스 계산
  if (upperSectionSum >= 63) {
    scoreBoard.bonus = 35;
  } else {
    scoreBoard.bonus = 0;
  }
  document.getElementById("bonus").textContent = scoreBoard.bonus;

  // 상단 섹션 총점 계산 (합계 + 보너스)
  scoreBoard.upperSectionGrandTotal = upperSectionSum + scoreBoard.bonus;
  document.getElementById("upperSectionGrandTotal").textContent = scoreBoard.upperSectionGrandTotal;

  // 하단 섹션 합계 계산
  let lowerSectionSum =
    (scoreBoard.threeOfAKind || 0) +
    (scoreBoard.fourOfAKind || 0) +
    (scoreBoard.fullHouse || 0) +
    (scoreBoard.smallStraight || 0) +
    (scoreBoard.largeStraight || 0) +
    (scoreBoard.yahtzee || 0) +
    (scoreBoard.chance || 0);
  scoreBoard.lowerSectionTotal = lowerSectionSum;
  document.getElementById("lowerSectionTotal").textContent = lowerSectionSum;

  // 최종 점수 계산
  scoreBoard.grandTotal = scoreBoard.upperSectionGrandTotal + scoreBoard.lowerSectionTotal;
  document.getElementById("grandTotal").textContent = scoreBoard.grandTotal;
  
  //2P 점수 계산
  document.getElementById("scoreOnes2").textContent = scoreBoard.ones2 || "0";
  document.getElementById("scoreTwos2").textContent = scoreBoard.twos2 || "0";
  document.getElementById("scoreThrees2").textContent = scoreBoard.threes2 || "0";
  document.getElementById("scoreFours2").textContent = scoreBoard.fours2 || "0";
  document.getElementById("scoreFives2").textContent = scoreBoard.fives2 || "0";
  document.getElementById("scoreSixes2").textContent = scoreBoard.sixes2 || "0";
  document.getElementById("scoreThreeOfAKind2").textContent = scoreBoard.threeOfAKind2 || "0";
  document.getElementById("scoreFourOfAKind2").textContent = scoreBoard.fourOfAKind2 || "0";
  document.getElementById("scoreFullHouse2").textContent = scoreBoard.fullHouse2 || "0";
  document.getElementById("scoreSmallStraight2").textContent = scoreBoard.smallStraight2 || "0";
  document.getElementById("scoreLargeStraight2").textContent = scoreBoard.largeStraight2 || "0";
  document.getElementById("scoreYahtzee2").textContent = scoreBoard.yahtzee2 || "0";
  document.getElementById("scoreChance2").textContent = scoreBoard.chance2 || "0";

  // 상단 섹션 합계 계산
  let upperSectionSum2 =
    (scoreBoard.ones2 || 0) +
    (scoreBoard.twos2 || 0) +
    (scoreBoard.threes2 || 0) +
    (scoreBoard.fours2 || 0) +
    (scoreBoard.fives2 || 0) +
    (scoreBoard.sixes2 || 0);
  scoreBoard.upperSectionTotal2 = upperSectionSum2;
  document.getElementById("upperSectionTotal2").textContent = upperSectionSum2;

  // 보너스 계산
  if (upperSectionSum >= 63) {
    scoreBoard.bonus2 = 35;
  } else {
    scoreBoard.bonus2 = 0;
  }
  document.getElementById("bonus2").textContent = scoreBoard.bonus2;

  // 상단 섹션 총점 계산 (합계 + 보너스)
  scoreBoard.upperSectionGrandTotal2 = upperSectionSum2 + scoreBoard.bonus2;
  document.getElementById("upperSectionGrandTotal2").textContent = scoreBoard.upperSectionGrandTotal2;

  // 하단 섹션 합계 계산
  let lowerSectionSum2 =
    (scoreBoard.threeOfAKind2 || 0) +
    (scoreBoard.fourOfAKind2 || 0) +
    (scoreBoard.fullHouse2 || 0) +
    (scoreBoard.smallStraight2 || 0) +
    (scoreBoard.largeStraight2 || 0) +
    (scoreBoard.yahtzee2 || 0) +
    (scoreBoard.chance2 || 0);
    scoreBoard.lowerSectionTotal2 = lowerSectionSum2;
    document.getElementById("lowerSectionTotal2").textContent = lowerSectionSum2;
    
    // 최종 점수 계산
    scoreBoard.grandTotal2 = scoreBoard.upperSectionGrandTotal2 + scoreBoard.lowerSectionTotal2;
    document.getElementById("grandTotal2").textContent = scoreBoard.grandTotal2;
  
}


function countNumbers(dice, number) {
  return dice.filter(die => die === number).length;
}

function hasSameValues(dice, count) {
  const counts = {};
  for (const die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }
  return Object.values(counts).some(c => c >= count);
}

function isFullHouse(dice) {
  const counts = {};
  for (const die of dice) {
    counts[die] = (counts[die] || 0) + 1;
  }
  const values = Object.values(counts);
  return values.includes(2) && values.includes(3);
}

function isSmallStraight(dice) {
  const uniqueDice = [...new Set(dice)].sort();
  const straight = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i <= straight.length - 4; i++) {
    if (uniqueDice.join('').includes(straight.slice(i, i + 4).join(''))) {
      return true;
    }
  }
  return false;
}

function isLargeStraight(dice) {
  const uniqueDice = [...new Set(dice)].sort();
  const largeStraight1 = [1, 2, 3, 4, 5];
  const largeStraight2 = [2, 3, 4, 5, 6];
  return uniqueDice.join('') === largeStraight1.join('') || uniqueDice.join('') === largeStraight2.join('');
}

// 카테고리 버튼 활성화 함수
function enableCategoryButtons() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    const category = button.id.replace('Button', '');
    button.disabled = scoreBoard[category] !== null;
  });
}

// 카테고리 버튼 비활성화 함수
function disableCategoryButton(category) {
  document.getElementById(category).disabled = true;
}

function isGameOver() {
  return Object.values(scoreBoard).every(score => score !== null);
}

function calculateTotalScore() {
  let totalScore = Object.values(scoreBoard).reduce((a, b) => a + b, 0);
  alert(`게임 종료! 총 점수: ${totalScore}`);
}
