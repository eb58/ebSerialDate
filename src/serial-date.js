const feedX = (x, f) => f(x);
const jsUpperCaseFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
const DAYS = {MONDAY: 1, TUESDAY: 2, WEDNESDAY: 3, THURSDAY: 4, FRIDAY: 5, SATURDAY: 6, SUNDAY: 7};
const MONTHS = {
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12
};
const MONTHS2QUARTER = {
    JANUARY: 1,
    FEBRUARY: 1,
    MARCH: 1,
    APRIL: 2,
    MAY: 2,
    JUNE: 2,
    JULY: 3,
    AUGUST: 3,
    SEPTEMBER: 3,
    OCTOBER: 4,
    NOVEMBER: 4,
    DECEMBER: 4
};

const EARLIEST_DATE_ORDINAL = 2;     // 1/1/1900
const LATEST_DATE_ORDINAL = 2958465; // 12/31/9999
const MINIMUM_YEAR_SUPPORTED = 1900;
const MAXIMUM_YEAR_SUPPORTED = 9999;

const LAST_DAY_OF_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const AGGREGATE_DAYS_TO_END_OF_MONTH = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const AGGREGATE_DAYS_TO_END_OF_PRECEDING_MONTH = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
const LEAP_YEAR_AGGREGATE_DAYS_TO_END_OF_MONTH = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
const LEAP_YEAR_AGGREGATE_DAYS_TO_END_OF_PRECEDING_MONTH = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];


const WEEKCODES = {
    FIRST_WEEK_IN_MONTH: 1,
    SECOND_WEEK_IN_MONTH: 2,
    THIRD_WEEK_IN_MONTH: 3,
    FOURTH_WEEK_IN_MONTH: 4,
    LAST_WEEK_IN_MONTH: 0
}
const api = {
    DAYS,
    days: Object.keys(DAYS),
    days2: Object.keys(DAYS).map(jsUpperCaseFirst), // ['Monday', ....

    MONTHS,
    months: Object.keys(MONTHS),
    months2: Object.keys(MONTHS).map(jsUpperCaseFirst),// ['January', ....

    WEEKCODES,

    isLeapYear: (x) => (x % 4 === 0 && x % 100 !== 0) || x % 400 === 0,
    leapYearCount: y => {
        // number of leap years from 1900 to the specified year INCLUSIVE.
        // Note that 1900 is not a leap year.
        const leap4 = Math.trunc((y - 1896) / 4);
        const leap100 = Math.trunc((y - 1800) / 100);
        const leap400 = Math.trunc((y - 1600) / 400);
        return leap4 - leap100 + leap400;
    },

    isValidWeekdayCode: (d) => 1 <= d && d <= 7,
    isValidMonthCode: (m) => 1 <= m && m <= 12,
    isValidWeekInMonthCode: (m) => 0 <= m && m <= 4,

    stringToWeekdayCode: s => feedX(api.days.find(day => day.toLowerCase().startsWith(s.toLowerCase())), (x) => x ? DAYS[x] : -1),
    stringToMonthCode: s => feedX(api.months.find(month => month.toLowerCase().startsWith(s.toLowerCase())), (x) => x ? MONTHS[x] : -1),

    weekdayCodeToString: c => {
        if (!api.isValidWeekdayCode(c))
            throw  Error("Invalid week code!")
        return jsUpperCaseFirst(api.days[c - 1])
    },

    monthCodeToString: c => {
        if (!api.isValidMonthCode(c))
            throw  Error("Invalid month code!")
        return jsUpperCaseFirst(api.months[c - 1]);
    },

    monthCodeToShortString: c => {
        if (!api.isValidMonthCode(c))
            throw  Error("Invalid month code!")
        return api.monthCodeToString(c).substring(0, 3);
    },

    monthCodeToQuarter: c => {
        if (!api.isValidMonthCode(c))
            throw Error("Invalid month code!")
        return MONTHS2QUARTER[api.months[c - 1]]
    },

    lastDayOfMonth: (month, year) => LAST_DAY_OF_MONTH[month] + api.isLeapYear(year),

    calcOrdinal: (day, month, year) => {
        const leapDaysForYear = api.leapYearCount(year - 1);
        const daysUpToYear = (year - MINIMUM_YEAR_SUPPORTED) * 365 + leapDaysForYear;
        const daysUpToMonth = AGGREGATE_DAYS_TO_END_OF_PRECEDING_MONTH[month] + (api.isLeapYear(year) && month > MONTHS.FEBRUARY) ? 1 : 0
        const daysInMonth = day - 1;
        return daysUpToYear + daysUpToMonth + daysInMonth + EARLIEST_DATE_ORDINAL;
    },
    // serialDateFromOrdinal()
    // makeDate: (d, m, y) => {
    //     const ordinal = api.calcOrdinal(d, m, y);
    //     return {
    //         addDays: n => aro
    //     }
    // }


}

module.exports = api