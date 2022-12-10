// 실시간 업데이트
function update(a){
  const maxValue = 693.2581;

  // ahu-01
  $('.ahu-01 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu00_sup_temp)/100) +", 1400"));
  $('.ahu-01 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu00_set_temp)/100) +", 1400"));
  $('.ahu-01 .svg_sup_box .temp_value').html(Number(a.ahu00_sup_temp).toFixed(1) + " ℃");
  $('.ahu-01 .svg_set_box .temp_value').html(Number(a.ahu00_set_temp).toFixed(1) + " ℃");

  // ahu-02
  $('.ahu-02 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu01_sup_temp)/100) +", 1400"));
  $('.ahu-02 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu01_set_temp)/100) +", 1400"));
  $('.ahu-02 .svg_sup_box .temp_value').html(Number(a.ahu01_sup_temp).toFixed(1) + " ℃");
  $('.ahu-02 .svg_set_box .temp_value').html(Number(a.ahu01_set_temp).toFixed(1) + " ℃");

  // ahu-03
  $('.ahu-03 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu02_sup_temp)/100) +", 1400"));
  $('.ahu-03 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu02_set_temp)/100) +", 1400"));
  $('.ahu-03 .svg_sup_box .temp_value').html(Number(a.ahu02_sup_temp).toFixed(1) + " ℃");
  $('.ahu-03 .svg_set_box .temp_value').html(Number(a.ahu02_set_temp).toFixed(1) + " ℃");

  // ahu-04a
  $('.ahu-04a .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu03_sup_temp)/100) +", 1400"));
  $('.ahu-04a .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu03_set_temp)/100) +", 1400"));
  $('.ahu-04a .svg_sup_box .temp_value').html(Number(a.ahu03_sup_temp).toFixed(1) + " ℃");
  $('.ahu-04a .svg_set_box .temp_value').html(Number(a.ahu03_set_temp).toFixed(1) + " ℃");

  // ahu-04b
  $('.ahu-04b .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu04_sup_temp)/100) +", 1400"));
  $('.ahu-04b .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu04_set_temp)/100) +", 1400"));
  $('.ahu-04b .svg_sup_box .temp_value').html(Number(a.ahu04_sup_temp).toFixed(1) + " ℃");
  $('.ahu-04b .svg_set_box .temp_value').html(Number(a.ahu04_set_temp).toFixed(1) + " ℃");

  // ahu-05
  $('.ahu-05 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu05_sup_temp)/100) +", 1400"));
  $('.ahu-05 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu05_set_temp)/100) +", 1400"));
  $('.ahu-05 .svg_sup_box .temp_value').html(Number(a.ahu05_sup_temp).toFixed(1) + " ℃");
  $('.ahu-05 .svg_set_box .temp_value').html(Number(a.ahu05_set_temp).toFixed(1) + " ℃");

  // ahu-06
  $('.ahu-06 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu06_sup_temp)/100) +", 1400"));
  $('.ahu-06 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu06_set_temp)/100) +", 1400"));
  $('.ahu-06 .svg_sup_box .temp_value').html(Number(a.ahu06_sup_temp).toFixed(1) + " ℃");
  $('.ahu-06 .svg_set_box .temp_value').html(Number(a.ahu06_set_temp).toFixed(1) + " ℃");

  // ahu-07
  $('.ahu-07 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu07_sup_temp)/100) +", 1400"));
  $('.ahu-07 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu07_set_temp)/100) +", 1400"));
  $('.ahu-07 .svg_sup_box .temp_value').html(Number(a.ahu07_sup_temp).toFixed(1) + " ℃");
  $('.ahu-07 .svg_set_box .temp_value').html(Number(a.ahu07_set_temp).toFixed(1) + " ℃");

  // ahu-08
  $('.ahu-08 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu08_sup_temp)/100) +", 1400"));
  $('.ahu-08 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu08_set_temp)/100) +", 1400"));
  $('.ahu-08 .svg_sup_box .temp_value').html(Number(a.ahu08_sup_temp).toFixed(1) + " ℃");
  $('.ahu-08 .svg_set_box .temp_value').html(Number(a.ahu08_set_temp).toFixed(1) + " ℃");

  // ahu-09
  $('.ahu-09 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu09_sup_temp)/100) +", 1400"));
  $('.ahu-09 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu09_set_temp)/100) +", 1400"));
  $('.ahu-09 .svg_sup_box .temp_value').html(Number(a.ahu09_sup_temp).toFixed(1) + " ℃");
  $('.ahu-09 .svg_set_box .temp_value').html(Number(a.ahu09_set_temp).toFixed(1) + " ℃");

  // ahu-10
  $('.ahu-10 .svg_sup').attr('stroke-dasharray', ((maxValue * Number(a.ahu10_sup_temp)/100) +", 1400"));
  $('.ahu-10 .svg_set').attr('stroke-dasharray', ((maxValue * Number(a.ahu10_set_temp)/100) +", 1400"));
  $('.ahu-10 .svg_sup_box .temp_value').html(Number(a.ahu10_sup_temp).toFixed(1) + " ℃");
  $('.ahu-10 .svg_set_box .temp_value').html(Number(a.ahu10_set_temp).toFixed(1) + " ℃");
}

// AHU 설비 리스트
function ahuInfos(a){
  a.forEach(function(key, index) {
    if((key.machine_name).indexOf('AHU') != -1){
      if(key['machine_name'] == 'AHU-01'){
        $('#fac_name').prepend(`<option value="${key.machine_id}" selected>${key.machine_name}</option>`);
      }else {
        $('#fac_name').append(`<option value="${key.machine_id}">${key.machine_name}</option>`);
      }
    }
  })
}

// AHU Select Change
function ahuInfo(a){
  $('.fac_use').html(`클린룸 : ${a[0].FAC_USE}`);
  $('.fac_loc').html(`설치장소 : ${a[0].FAC_LOC}`);
}

// 차트 공통
var chartArray = [];
var chartType = '';

// AHU온도 차트

// AHU 차트 기본 설정
let ahuMargin = {top: 80, right: 40, bottom: 40, left: 60};
let ahuWidth = '';
if($('#temp_chart').length != 0) ahuWidth = d3.select('#temp_chart').node().getBoundingClientRect().width - ahuMargin.left - ahuMargin.right;
let ahuHeight = 356;

function ahuChart(a){
  $('#temp_chart').html('');
  chartArray = a;
  chartType = 'temp';

  // x축 범위 설정 (금일 00시 ~ 익일 00시)
  let today = new Date(a[0].run_datetime);
  today.setHours(0);
  today.setMinutes(0);
  let tomorrow = new Date(a[0].run_datetime);
  tomorrow.setDate(tomorrow.getDate()+1);
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);

  // autoScale을 위한 최소값 최대값 설정
  let maxVal = a.map((key) => { 
    var array = [Number(key.ahu_set_temp), Number(key.ahu_sup_temp), Number(key.ahu_ret_temp), Number(key.ahu_out_temp)];
    return Math.max(...array);
  });
  let minVal = a.map((key) => {
    var array = [Number(key.ahu_set_temp), Number(key.ahu_sup_temp), Number(key.ahu_ret_temp), Number(key.ahu_out_temp)];
    return Math.min(...array);
  });

  maxVal = Math.max(...maxVal)
  minVal = Math.min(...minVal)

  // x축 설정
  const x = d3.scaleTime().domain([today, tomorrow]).range([0, ahuWidth]);

  // y축 설정
  const y = d3.scaleLinear().domain([minVal, maxVal]).range([(ahuHeight - ahuMargin.top), 0]).nice();

  // line 설정
  const valueline = d3.line().x((d) => {return x(new Date(d.run_datetime))}).y((d) => {return y(Number(d.ahu_set_temp))});
  const valueline2 = d3.line().x((d) => {return x(new Date(d.run_datetime))}).y((d) => {return y(Number(d.ahu_sup_temp))});
  const valueline3 = d3.line().x((d) => {return x(new Date(d.run_datetime))}).y((d) => {return y(Number(d.ahu_ret_temp))});
  const valueline4 = d3.line().x((d) => {return x(new Date(d.run_datetime))}).y((d) => {return y(Number(d.ahu_out_temp))});

  // 차트 틀(svg) 생성
  const svg = d3.select('#temp_chart').append('svg').style('width', ahuWidth + ahuMargin.left + ahuMargin.right).style('height', ahuHeight).style('background', "#fff");

  // 차트에 x축 axis 생성
  svg
  .append('g')
  .attr('class', 'x axis xAxis')
  .attr('transform', `translate(${ahuMargin.left}, ${(ahuHeight - ahuMargin.bottom)})`)
  .call(d3.axisBottom(x).ticks(ahuWidth/64.33333333333333).tickSizeOuter(0).tickFormat(d3.timeFormat("%H시")))
  .call(g => g.select('.domain').remove());

  // 차트에 y축 axis 생성
  svg
  .append('g')
  .attr('class', 'y axis yAxis')
  .call(d3.axisLeft(y).ticks(5))
  .attr('transform', `translate(${ahuMargin.left},${ahuMargin.right})`)
  .call(g => g.select('.domain').remove())
  .call(g => g.selectAll('line').attr('stroke','#999').attr('opacity','0.2').attr('stroke-dasharray','3.3').attr('x2',`${ahuWidth}`))
  .attr('x2', `${ahuWidth}`)
  .style('stroke', 'none')
  .attr('opacity', '1')
  .append('g')
  .append('text')
  .attr('class', 'titleText')
  .attr('transform', 'rotate(-90)')
  .attr('x', `${-ahuHeight + 230}`)
  .attr('y', -36)
  .attr('font-size', '13px')
  .attr('font-family', 'Spoqa Han Sans Neo')
  .attr('font-anchor', 'middle')
  .attr('fill', '#282828')
  .text('온도 (℃)')

  // 차트에 라인 생성 (설정온도)
  const linePath = svg
  .append('path')
  .data([a])
  .attr('class', 'line1')
  .attr('transform', `translate(${ahuMargin.left}, ${ahuMargin.right})`)
  .attr('d', valueline)
  .style('fill', 'none')
  .style('stroke-width', 2)
  .style('stroke', '#FF3434')

  // 차트에 라인 생성 (공급온도)
  const linePath2 = svg
  .append('path')
  .data([a])
  .attr('class', 'line2')
  .attr('transform', `translate(${ahuMargin.left}, ${ahuMargin.right})`)
  .attr('d', valueline2)
  .style('fill', 'none')
  .style('stroke-width', 2)
  .style('stroke', '#4A7EF9')

  // 차트에 라인 생성 (환기온도)
  const linePath3 = svg
  .append('path')
  .data([a])
  .attr('class', 'line3')
  .attr('transform', `translate(${ahuMargin.left}, ${ahuMargin.right})`)
  .attr('d', valueline3)
  .style('fill', 'none')
  .style('stroke-width', 2)
  .style('stroke', 'orange')

  // 차트에 라인 생성 (외기온도)
  const linePath4 = svg
  .append('path')
  .data([a])
  .attr('class', 'line4')
  .attr('transform', `translate(${ahuMargin.left}, ${ahuMargin.right})`)
  .attr('d', valueline4)
  .style('fill', 'none')
  .style('stroke-width', 2)
  .style('stroke', 'rgb(105, 199, 168)')

  // 차트에 마우스 올렸을 때 vertical line과 위치 circle 생성
  // 차트 전체를 이동할 수 있도록 width: 100%, height: 100%의 그룹 생성
  const focus = svg
  .append('g')
  .attr('class','focus')
  .attr('width', ahuWidth)
  .attr('height', ahuHeight);

  // vertical line 생성
  focus
  .append('line')
  .attr('class', 'vertical_line')
  .attr('opacity', 0)
  .style('stroke-dasharray', '3.3')
  .attr('stroke-width', '2px')
  .attr('stroke', '#999')
  .attr('y1', 0)
  .attr('y2', `${ahuHeight - ahuMargin.top}`)

  // 설정온도 circle 생성
  focus
  .append('circle')
  .attr('class', 'circle_y1')
  .attr('opacity', 0)
  .attr('stroke','#FF3434')
  .attr('fill','white')
  .attr('stroke-width', 2)
  .attr('r', 4); // 반지름값

  // 공급온도 circle 생성
  focus
  .append('circle')
  .attr('class', 'circle_y2')
  .attr('opacity', 0)
  .attr('stroke','#4A7EF9')
  .attr('fill','white')
  .attr('stroke-width', 2)
  .attr('r', 4); // 반지름값

  // 설정온도 circle 생성
  focus
  .append('circle')
  .attr('class', 'circle_y3')
  .attr('opacity', 0)
  .attr('stroke','orange')
  .attr('fill','white')
  .attr('stroke-width', 2)
  .attr('r', 4); // 반지름값

  // 공급온도 circle 생성
  focus
  .append('circle')
  .attr('class', 'circle_y4')
  .attr('opacity', 0)
  .attr('stroke','rgb(105, 199, 168)')
  .attr('fill','white')
  .attr('stroke-width', 2)
  .attr('r', 4); // 반지름값

  // 툴팁 이벤트 생성
  // 차트 전체를 감싸는 투명한 박스를 생성하여 박스에 올리는 마우스 좌표를 계산하여 해당 좌표에 있는 값을 출력
  const observerbox = svg
  .append('rect')
  .attr('width', ahuWidth)
  .attr('height', ahuHeight - ahuMargin.top)
  .attr('transform', `translate(${ahuMargin.left}, ${ahuMargin.top/2})`)
  .attr('opacity', 0)
  .on('mousemove', function(){
    // 마우스 위치 구하여 위치에 맞는 배열 값 구하기
    const bisect = d3.bisector((d) => new Date(d.run_datetime)).left,
    x99 = x.invert(d3.mouse(this)[0]),
    i = bisect(a, x99, 1),
    d0 = a[i - 1],
    d1 = a[i],
    dType = typeof a.run_datetime,
    d = dType != "undefined" ? (x - new Date(d0.run_datetime) > new Date(d1.run_datetime) - x99 ? d1 : d0) : d0;

    // 날짜 값
    const dDate = new Date(d.run_datetime);

    // vertical line 위치 변경
    focus
    .select('line')
    .attr('opacity', '0.5')
    .attr('transform', `translate(${(x(dDate) + ahuMargin.left)}, ${ahuMargin.bottom})`);

    // 설정 온도 circle 위치 변경
    focus
    .select('.circle_y1')
    .attr('opacity', 1)
    .attr('transform', `translate(${(x(dDate) + ahuMargin.left)}, ${(y(d.ahu_set_temp) + ahuMargin.bottom)})`)

    // 공급 온도 circle 위치 변경
    focus
    .select('.circle_y2')
    .attr('opacity', 1)
    .attr('transform', `translate(${(x(dDate) + ahuMargin.left)}, ${(y(d.ahu_sup_temp) + ahuMargin.bottom)})`)

    // 환기 온도 circle 위치 변경
    focus
    .select('.circle_y3')
    .attr('opacity', 1)
    .attr('transform', `translate(${(x(dDate) + ahuMargin.left)}, ${(y(d.ahu_ret_temp) + ahuMargin.bottom)})`)

    // 외기 온도 circle 위치 변경
    focus
    .select('.circle_y4')
    .attr('opacity', 1)
    .attr('transform', `translate(${(x(dDate) + ahuMargin.left)}, ${(y(d.ahu_out_temp) + ahuMargin.bottom)})`)

    // 툴팁 활성화
    const tooltip = document.querySelector('#tooltip');
    tooltip.style.opacity = 1;

    // 툴팁 위치 설정
    if(x(new Date(d.run_datetime)) + tooltip.offsetWidth < ahuWidth){
      tooltip.style.left = `${x(dDate) + 72}px`;
    }else {
      tooltip.style.left = `${x(dDate) - 128}px`;
    }

    // 툴팁 텍스트 작성
    var dYears = dDate.getFullYear();
    var dMonth = dDate.getMonth()+1;
    dMonth = dateParse(dMonth);
    var dDay = dDate.getDate();
    dDay = dateParse(dDay);
    var dHour = dDate.getHours();
    dHour = dateParse(dHour);
    var dMin = dDate.getMinutes();
    dMin = dateParse(dMin);

    $('.tooltipDate').text(`${dYears}년 ${dMonth}월 ${dDay}일 ${dHour}시 ${dMin}분`)
    $('.tooltipValue.set').text(`${Number(d.ahu_set_temp).toFixed(1)} ℃`)
    $('.tooltipValue.sup').text(`${Number(d.ahu_sup_temp).toFixed(1)} ℃`)
    $('.tooltipValue.ret').text(`${Number(d.ahu_ret_temp).toFixed(1)} ℃`)
    $('.tooltipValue.out').text(`${Number(d.ahu_out_temp).toFixed(1)} ℃`)
  })
  .on('mouseleave', () => {
    // 마우스가 차트 밖으로 벗어 났을 때 focus 숨기기
    focus
    .select('line')
    .attr('opacity', 0)

    focus
    .select('.circle_y1')
    .attr('opacity', 0)

    focus
    .select('.circle_y2')
    .attr('opacity', 0)

    focus
    .select('.circle_y3')
    .attr('opacity', 0)

    focus
    .select('.circle_y4')
    .attr('opacity', 0)

    // 툴팁 숨기기
    const tooltip = document.querySelector('#tooltip');
    tooltip.style.opacity = 0;
  })

  $('#temp_chart').append(
    `<div class="labels">
      <div>
        <input type="checkbox" id="set_btn" class="ahu_label_btn" data-label="set" checked />
        <label for="set_btn" class="label_box set"></label>
        <label for="set_btn" class="label set">설정온도</label>
      </div>
      <div>
        <input type="checkbox" id="sup_btn" class="ahu_label_btn" data-label="sup" checked />
        <label for="sup_btn" class="label_box sup"></label>
        <label for="sup_btn" class="label sup">급기온도</label>
      </div>
      <div>
        <input type="checkbox" id="ret_btn" class="ahu_label_btn" data-label="ret" checked />
        <label for="ret_btn" class="label_box ret"></label>
        <label for="ret_btn" class="label ret">환기온도</lab>
      </div>
      <div>
        <input type="checkbox" id="out_btn" class="ahu_label_btn" data-label="out" checked />
        <label for="out_btn" class="label_box out"></label>
        <label for="out_btn" class="label out">외기온도</label>
      </div>
    </div>`
  )
}

// ahu 테이블
function ahuTable(a){
  const table = document.querySelector('.temp-table tbody');
  table.innerHTML = '';
  a.forEach((e, i)=>{
    table.innerHTML += `<tr>
      <td>${e.run_datetime}</td>
      <td>${Number(e.ahu_set_temp).toFixed(1)} ℃</td>
      <td>${Number(e.ahu_sup_temp).toFixed(1)} ℃</td>
      <td>${Number(e.ahu_ret_temp).toFixed(1)} ℃</td>
      <td>${Number(e.ahu_out_temp).toFixed(1)} ℃</td>
      </tr>`
  })
}

// 시간별 전력소비량 차트 (area)
let hourMargin = {top: 80, right: 40, bottom: 40, left: 60};
let hourWidth = '';
if($('#chart_container.hour').length != 0) hourWidth = d3.select('#chart_container').node().getBoundingClientRect().width;
let hourHeight = 396;
function hourChart(a){
  $('#chart_container').html('');
  chartArray = a;
  chartType = 'hour';

  // x축 범위 설정 (금일 00시 ~ 익일 00시)
  let today = new Date(a[0].runDate);
  today.setHours(0);
  today.setMinutes(0);
  let tomorrow = new Date(a[0].runDate);
  tomorrow.setDate(tomorrow.getDate());
  tomorrow.setHours(23);
  tomorrow.setMinutes(10);

  // x축 설정
  const x = d3.scaleTime().domain([today, tomorrow]).range([0, hourWidth - hourMargin.left - hourMargin.right/2]);

  // y축 설정
  const y = d3.scaleLinear().domain([0, (d3.max(a, d => Math.abs(d.sumData)))]).range([(hourHeight - hourMargin.top), 0]).nice();

  // line 설정
  const valueline = d3.area()
  .x((d) => {return x(new Date(d.runDate))})
  .y0(y(0))
  .y1((d) => {return y(Number(d.sumData))});

  const valueline2 = d3.line().x((d) => {return x(new Date(d.runDate))}).y((d) => {return y(Number(d.sumData))});

  const svg = d3.select('#chart_container').append('svg').style('width', hourWidth).style('height', hourHeight).style('background', "#fff").attr('preserveAspectRatio', "none");

  // 차트에 x축 axis 생성
  svg
  .append('g')
  .attr('class', 'x axis xAxis')
  .attr('transform', `translate(${hourMargin.left}, ${(hourHeight - hourMargin.bottom)})`)
  .call(d3.axisBottom(x).ticks(hourWidth/62.33333333333333).tickSizeOuter(0).tickFormat(d3.timeFormat("%H시")))
  .call(g => g.select('.domain').remove());

  // 차트에 y축 axis 생성
  svg
  .append('g')
  .attr('class', 'y axis yAxis')
  .call(d3.axisLeft(y).ticks(8))
  .attr('transform', `translate(${hourMargin.left},${hourMargin.right})`)
  .call(g => g.select('.domain').remove())
  .call(g => g.selectAll('line').attr('stroke','#999').attr('opacity','0.2').attr('stroke-dasharray','3.3').attr('x2',`${hourWidth}`))
  .attr('x2', `${hourWidth}`)
  .style('stroke', 'none')
  .attr('opacity', '1')
  .append('g')
  .append('text')
  .attr('class', 'titleText')
  .attr('transform', 'rotate(-90)')
  .attr('x', `${-hourHeight + 280}`)
  .attr('y', -36)
  .attr('font-size', '13px')
  .attr('font-family', 'Spoqa Han Sans Neo')
  .attr('font-anchor', 'middle')
  .attr('fill', 'currentColor')
  .text('전력소비량 (kW)')

  // 차트에 area 생성 (전력소비량)
  const linePath = svg
  .append('path')
  .data([a])
  .attr('class', 'line1')
  .attr('transform', `translate(${hourMargin.left}, ${hourMargin.right})`)
  .attr('d', valueline)
  .style('fill', 'rgba(255,179,13,.4)')
  .style('stroke-width', 2)
  .style('z-index', '99')

  const linePath2 = svg
  .append('path')
  .data([a])
  .attr('class', 'line1')
  .attr('transform', `translate(${hourMargin.left}, ${hourMargin.right})`)
  .attr('d', valueline2)
  .style('fill', 'none')
  .style('stroke-width', 2)
  .style('stroke', '#FFB30D')
  .style('z-index', '99')

  // 차트에 마우스 올렸을 때 vertical line과 위치 circle 생성
  // 차트 전체를 이동할 수 있도록 width: 100%, height: 100%의 그룹 생성
  const focus = svg
  .append('g')
  .attr('class','focus')
  .attr('width', hourWidth)
  .attr('height', hourHeight);

  // vertical line 생성
  focus
  .append('line')
  .attr('class', 'vertical_line')
  .attr('opacity', 0)
  .style('stroke-dasharray', '3.3')
  .attr('stroke-width', '2px')
  .attr('stroke', '#999')
  .attr('y1', 0)
  .attr('y2', `${hourHeight - (hourMargin.top + hourMargin.bottom)}`)

  // 전력소비량 circle 생성
  focus
  .append('circle')
  .attr('class', 'circle_y1')
  .attr('opacity', 0)
  .attr('stroke','#FFB30D')
  .attr('fill','white')
  .attr('stroke-width', 2)
  .attr('r', 4); // 반지름값

  // 툴팁 이벤트 생성
  // 차트 전체를 감싸는 투명한 박스를 생성하여 박스에 올리는 마우스 좌표를 계산하여 해당 좌표에 있는 값을 출력
  const observerbox = svg
  .append('rect')
  .attr('width', hourWidth - hourMargin.left)
  .attr('height', hourHeight - hourMargin.top)
  .attr('transform', `translate(${hourMargin.left}, ${hourMargin.top/2})`)
  .attr('opacity', 0)
  .on('mousemove', function() {
    // 마우스 위치 구하여 위치에 맞는 배열 값 구하기
    const bisect = d3.bisector((d) => new Date(d.runDate)).left,
    x99 = x.invert(d3.mouse(this)[0]),
    i = bisect(a, x99, 1),
    d0 = a[i - 1],
    d1 = a[i],
    dType = typeof a.runDate,
    d = dType != "undefined" ? (x - new Date(d0.runDate) > new Date(d1.runDate) - x99 ? d1 : d0) : d0;

    // 날짜 값
    const dDate = new Date(d.runDate);

    // vertical line 위치 변경
    focus
    .select('line')
    .attr('opacity', '0.5')
    .attr('transform', `translate(${(x(dDate) + hourMargin.left)}, ${hourMargin.top})`);

    // 전력소비량 circle 위치 변경
    focus
    .select('.circle_y1')
    .attr('opacity', 1)
    .attr('transform', `translate(${(x(dDate) + hourMargin.left)}, ${(y(d.sumData) + hourMargin.bottom)})`)

    // 툴팁 활성화
    const tooltip = document.querySelector('#tooltip');
    tooltip.style.opacity = 1;

    // 툴팁 위치 설정
    if(x(new Date(d.runDate)) + tooltip.offsetWidth < hourWidth){
      tooltip.style.left = `${x(dDate) + 72}px`;
    }else {
      tooltip.style.left = `${x(dDate) - 132}px`;
    }

    // 툴팁 텍스트 작성
    var dYears = dDate.getFullYear();
    var dMonth = dDate.getMonth()+1;
    dMonth = dateParse(dMonth);
    var dDay = dDate.getDate();
    dDay = dateParse(dDay);
    var dHour = dDate.getHours();
    dHour = dateParse(dHour);
    var dMin = dDate.getMinutes();
    dMin = dateParse(dMin);

    $('.tooltipDate').text(`${dYears}년 ${dMonth}월 ${dDay}일 ${dHour}시 ${dMin}분`)
    $('.tooltipValue.kW').text(`${Number(d.sumData).toFixed(2)} kW`)
  })
  .on('mouseleave', () => {
    // 마우스가 차트 밖으로 벗어 났을 때 focus 숨기기
    focus
    .select('line')
    .attr('opacity', 0)

    focus
    .select('.circle_y1')
    .attr('opacity', 0)

    // 툴팁 숨기기
    const tooltip = document.querySelector('#tooltip');
    tooltip.style.opacity = 0;
  })

  $('#chart_container').append(
    `<div class="labels">
      <span class="label_box kW"></span>
      <span class="label kW">전력소비량</span>
    </div>`
  )
}

// 시간별 전력소비량 테이블
function hourTable(a){
  const table = document.querySelector('.hour-table tbody');
  table.innerHTML = '';
  a.forEach((e, i)=>{
    table.innerHTML += `<tr><td>${e.runDate}</td><td>${Number(e.sumData).toFixed(2)} kW</td></tr>`
  })

  return;
}

// 일별 전력소비량 차트 (bar)
function dayChart(a){
  $('#chart_container').html('');
  chartArray = a;
  chartType = 'day';

  let today = new Date(a[0].runDate);
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth();
  let thisMonth = new Date(todayYear, todayMonth, 0);
  let nextMonth = new Date(todayYear, (todayMonth + 1), 1);
  // let lastDay = nextMonth.getDate();

  const dayMapBar = a.map(function(key) {
    return [new Date(key.runDate).setHours(9), Number(key.sumData)]
  })

  const dayChart = document.querySelector('#chart_container');
  let dayChartDrawing = new Dygraph(dayChart, dayMapBar, {
    labels: ["date", "전력소비량"],
	  legend: 'follow',
	  title: '',
	  showRoller: false,
	  customBars: false,
	  ylabel: '전력소비량(kWh)',
	  gridLineColor: '#CCC',
	  axisLineColor: 'white',
    plotter: barChartPlotter,
	  strokeWidth: 2,
    stroke: '#FFB30D',
	  highlightCircleSize: 4,
    dateWindow: [thisMonth, nextMonth],
	  zoomCallback: function(minX, maxX, yRanges) {
		  dayChartDrawing.updateOptions({
        dateWindow: null,
        valueRange: null
      });
	  },
    series : {
      "전력소비량" : {
        drawHighlightPointCallback : function(g, name, ctx, cx, cy, color, radius){
          ctx.beginPath();
          ctx.strokeStyle = "#FFB30D";
          ctx.fillStyle = "#FFF";
          ctx.arc(cx, cy, radius, 0, 2 * Math.PI, false);
          ctx.fill();
          ctx.stroke();
        },
      },
     },
      plugins: [
      new Dygraph.Plugins.Crosshair({
        direction: "vertical",
      })
    ],
      axes: {
        x: {
          gridLineWidth: 0,
          gridLineColor: 'rgba(0,0,0,0)',
          valueFormatter: function(ms) {
            var date = new Date(ms)
            var valueYear = date.getFullYear();
            var valueMon = date.getMonth() + 1;
            valueMon = valueMon > 9 ? valueMon : '0' + valueMon; 
            var valueDay = date.getDate();
            valueDay = valueDay > 9 ? valueDay : '0' + valueDay; 
            
            const resultText = valueYear + '년 ' + valueMon + '월 ' + valueDay + '일 '
          
            return resultText
          },
            axisLabelFormatter: function(d) {
            var date = new Date(d)
            var valueDay = date.getDate();
            valueDay = valueDay > 9 ? valueDay : '0' + valueDay; 
            
            let resultText;
            
            resultText = `${valueDay}일`;
        
            return resultText;
           },
        },
        y: {
            valueFormatter: function(ms) {
              return ms.toFixed(2) + ' kW';
            },
         }
      }
  })

  $('#chart_container').append(
    `<div class="labels">
      <span class="label_box kW"></span>
      <span class="label kW">전력소비량</span>
    </div>`
  )
}

// 일별 전력소비량 테이블
function dayTable(a){
  const table = document.querySelector('.day-table tbody');
  table.innerHTML = '';
  a.forEach((e, i)=>{
    table.innerHTML += `<tr><td>${e.runDate}</td><td>${Number(e.sumData).toFixed(2)} kWh</td></tr>`
  })

  return;
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
      var context = this, args = arguments;
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
  };
};

let observerElement = '';
if($('.temp_chart-container').length != 0) observerElement = document.querySelector('.temp_chart-container');
if($('.chart_container').length != 0) observerElement = document.querySelector('.chart_container');

setTimeout(() => {
const resizeObserver = new ResizeObserver((entries) => {
  if (chartType != ''){
    switch (chartType) {
      case 'temp':
        ahuWidth = d3.select('#temp_chart').node().getBoundingClientRect().width - ahuMargin.left - ahuMargin.right;
        ahuChart(chartArray);
        break;
      case 'hour':
        hourWidth = d3.select('#chart_container').node().getBoundingClientRect().width;
        hourChart(chartArray);
        break;
      case 'day':
        // dayChart(chartArray);
        break;
      default :
        break;
    }
  }
})

if(observerElement != '') resizeObserver.observe(observerElement);

}, 100)