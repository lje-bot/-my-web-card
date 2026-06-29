/* ==========================================================================
   JavaScript 기능 구현 파일
   이 파일은 버튼 클릭 시 카드를 전환(명함 ↔ 이력서)하는 브라우저 동작을 제어합니다.
   ========================================================================== */

// HTML 문서가 완전히 로드된 후에 코드가 실행되도록 보장합니다.
document.addEventListener('DOMContentLoaded', () => {

  // HTML에서 제어할 세 가지 중요 요소를 가져옵니다.
  const cardContainer = document.getElementById('cardContainer'); // 카드 전체를 감싸는 상자
  const toggleBtn = document.getElementById('toggleBtn');           // 전환 버튼
  const btnText = toggleBtn.querySelector('.btn-text');             // 버튼 안의 글자 영역

  // 버튼을 클릭했을 때 일어날 행동을 정의합니다.
  toggleBtn.addEventListener('click', () => {

    // cardContainer에 'is-resume'이라는 클래스명이 없으면 추가하고, 있으면 제거합니다.
    // CSS 파일에서 이 클래스의 유무에 따라 카드의 크기와 보임 여부를 조정하게 됩니다.
    const isResumeActive = cardContainer.classList.toggle('is-resume');

    // 현재 이력서 화면이 활성화되었는지 여부에 따라 버튼의 텍스트를 변경합니다.
    if (isResumeActive) {
      btnText.textContent = '명함 보기'; // 이력서 화면일 때 버튼 글씨를 변경
    } else {
      btnText.textContent = '이력서 보기'; // 명함 화면일 때 버튼 글씨를 변경
    }
  });

});
