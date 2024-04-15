// 가상의 근무자 위치 데이터
const workerData = [
  { id: 1, lat: 37.1234, lng: -122.4567, internal: true },
  { id: 2, lat: 37.2345, lng: -122.5678, internal: false },
  // 나머지 근무자들...
];

// 지도 생성 및 초기화
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.1234, lng: -122.4567 }, // 근무지 중심 좌표
    zoom: 10, // 초기 줌 레벨
  });

  // 근무자 위치 표시
  workerData.forEach(worker => {
    const marker = new google.maps.Marker({
      position: { lat: worker.lat, lng: worker.lng },
      map: map,
      title: `Worker ${worker.id}`
    });

    // 근무자 위치를 클릭하면 선택 토글
    marker.addListener("click", () => {
      marker.classList.toggle("selected");
    });
  });

  // 필터링 기능 구현
  const filterInternalButton = document.getElementById("filter-internal");
  const filterExternalButton = document.getElementById("filter-external");

  filterInternalButton.addEventListener("click", () => {
    filterWorkers(true);
  });

  filterExternalButton.addEventListener("click", () => {
    filterWorkers(false);
  });

  function filterWorkers(internal) {
    workerData.forEach(worker => {
      const marker = document.querySelector(`.worker[data-id="${worker.id}"]`);
      if (marker) {
        if (worker.internal === internal) {
          marker.style.display = "block";
        } else {
          marker.style.display = "none";
        }
      }
    });
  }
}
