// IP, PORT Address
const ip = "0.0.0.0";
const port = "8888";

// API Address
// 대시보드
const dashboardAddress = '/GetAHUSetSupData';

// AHU 설비 리스트
const ahuInfosAddress = '/GetAHUInfos';
 
// AHU 설비 정보
const ahuInfoAddress = '/GetAHUInfo';

// AHU 구성 정보
const ahuConfiguration = '/GetAHUConfiguration';

// AHU 온도 트렌드
const ahuTempAddress = '/GetAHUData';

// 시간별 전력소비량
const hourPowerAddress = '/GetLpDataHourly';

// 일별 전력소비량
const dayPowerAddress = '/GetLpDataDaily';

// 일별 총사용량

const AhuTotalPowerDaily = '/GetAhuTotalPowerDaily';
const ChillerTotalPowerDaily = '/GetChillerTotalPowerDaily';
const BoilerTotalPowerDaily = '/GetBoilerTotalPowerDaily';
const BoilerTotalGasDaily = '/GetBoilerTotalGasDaily';

// 시간별 총사용량

const AhuTotalPowerHourly = '/GetAhuTotalPowerHourly';
const ChillerTotalPowerHourly = '/GetChillerTotalPowerHourly';
const BoilerTotalPowerHourly = '/GetBoilerTotalPowerHourly';
const BoilerTotalGasHourly = '/GetBoilerTotalGasHourly';


// 개별 기기 데이터


const AhuTempData = '/GetAhuTempData';
const AhuPowerData = '/GetAhuPowerData';
const ChillerCwstData = '/GetChillerCwstData';
const ChillerPowerData = '/GetChillerPowerData';
const BoilerGasData = '/GetBoilerGasData';
const BoilerPowerData = '/GetBoilerPowerData';