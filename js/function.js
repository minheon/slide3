document.addEventListener('DOMContentLoaded', function() {

	const $slides = document.querySelectorAll('.slides > .slides-container > p');
	const $indicators = document.querySelectorAll('.slides > .slides-pagination > li > a');
	
	const $btnPrev = document.querySelector('.slides > a.prev');
	const $btnNext = document.querySelector('.slides > a.next');

	const $btnAuto = document.querySelector('.slides>.btn_auto'); //자동재생 버튼

	let intervalKey = null;

	let nowIdx = Math.floor(Math.random()*5); //현재 보여지고 있는 슬라이드의 인덱스번호 0~4
	let oldIdx = nowIdx; //직전에 보여졌던 슬라이드의 인덱스번호

	//초기화작업
	$slides[nowIdx].classList.add('on');
	$indicators[nowIdx].parentElement.classList.add('on');

	//인디케이터에 대한 클릭이벤트
	$indicators.forEach(function($indicator, idx){

		$indicator.addEventListener('click', function(evt){
			evt.preventDefault();

			oldIdx = nowIdx;
			nowIdx = idx;

			//이전 인디케이터 비활성화
			$indicators[oldIdx].parentElement.classList.remove('on');

			//이번 인디케이터 활성화
			$indicators[nowIdx].parentElement.classList.add('on');

			//이전 슬라이드 사라짐
			$slides[oldIdx].classList.remove('on');

			//이번에 나타날 슬라이드 보임
			$slides[nowIdx].classList.add('on');
		})

	});


	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.addEventListener('click', function(evt){

		oldIdx = nowIdx;

		if(nowIdx<4){
			nowIdx++;
		}else{
			nowIdx=0;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});


	//이전 버튼에 대한 클릭이벤트 구문
	$btnPrev.addEventListener('click', function(evt){
		evt.preventDefault();

		oldIdx = nowIdx;

		if(nowIdx>0){
			nowIdx--;
		}else{
			nowIdx=4;
		}

		//이전 인디케이터 비활성화
		$indicators[oldIdx].parentElement.classList.remove('on');

		//이번 인디케이터 활성화
		$indicators[nowIdx].parentElement.classList.add('on');

		//이전 슬라이드 사라짐
		$slides[oldIdx].classList.remove('on');

		//이번에 나타날 슬라이드 보임
		$slides[nowIdx].classList.add('on');
	});
});