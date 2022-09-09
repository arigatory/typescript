import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const summary = Summary.WinsAnalysisWithHtmlReport('Man United');
const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
