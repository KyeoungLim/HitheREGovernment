// radar-chart.js
document.addEventListener('DOMContentLoaded', function () {
    var radarData = {
        labels: ['Agriculture', 'Construction', 'Manufacturing', 'Fishery', 'Service'],
        datasets: [{
                label: 'Seoul',
                data: [5, 38, 17, 0, 40], // 첫 번째 데이터 세트
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // 영역의 배경색
                borderColor: 'rgba(255, 99, 132, 1)', // 테두리 색상
                borderWidth: 1 // 테두리 두께
            },
            {
                label: 'Busan',
                data: [12, 25, 32, 10, 21], // 두 번째 데이터 세트
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // 영역의 배경색
                borderColor: 'rgba(54, 162, 235, 1)', // 테두리 색상
                borderWidth: 1 // 테두리 두께
            },
            {
                label: 'Incheon',
                data: [8, 21, 34, 33, 4], // 두 번째 데이터 세트
                backgroundColor: 'rgba(255, 206, 86, 0.2)', // 영역의 배경색
                borderColor: 'rgba(255, 206, 86, 1)', // 테두리 색상
                borderWidth: 1 // 테두리 두께
            },
            {
                label: 'Gangwon-do',
                data: [43, 10, 25, 19, 3], // 두 번째 데이터 세트
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // 영역의 배경색
                borderColor: 'rgba(75, 192, 192, 1)', // 테두리 색상
                borderWidth: 1 // 테두리 두께
            },
            {
                label: 'Gyeonggi-do',
                data: [24, 15, 21, 10, 30], // 두 번째 데이터 세트
                backgroundColor: 'rgba(33, 28, 106, 0.2)', // 영역의 배경색
                borderColor: 'rgba(33, 28, 106, 1)', // 테두리 색상
                borderWidth: 1 // 테두리 두께
            }
        ]
    };

    var radarChart = new Chart(document.getElementById('myRadarChart'), {
        type: 'radar',
        data: radarData,
        options: {
            maintainAspectRatio: false, // 캔버스 비율을 유지하지 않음
            aspectRatio: 1 // 캔버스의 가로와 세로 길이의 비율을 1:1로 설정
        }
    });
});


