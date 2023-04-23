const { expect } = require("@jest/globals");
const {
    DAYS,
    MONTHS,
    WEEKCODES,

    isLeapYear,
    leapYearCount,

    isValidWeekdayCode,
    isValidMonthCode,
    isValidWeekInMonthCode,

    stringToWeekdayCode,
    stringToMonthCode,

    weekdayCodeToString, 
    
    monthCodeToString, 
    monthCodeToShortString,
    monthCodeToQuarter,
    lastDayOfMonth,
} = require('../src/serial-date')

const assertEquals = (a, b) => expect(a).toBe(b)
const assertTrue = (a) => expect(a).toBe(true)
const assertFalse = (a) => expect(a).toBe(false)


test('testset isValidWeekdayCode', () => {
    for (let day = 1; day <= 7; day++) expect(isValidWeekdayCode(day)).toBe(true);
    expect(isValidWeekdayCode(0)).toBe(false);
    expect(isValidWeekdayCode(8)).toBe(false);
})

test('testset isValidMonthCode', () => {
    for (let i = 1; i <= 12; i++) assertTrue(isValidMonthCode(i));
    assertFalse(isValidMonthCode(0));
    assertFalse(isValidMonthCode(13));
})

test('testset testStringToWeekdayCode', () => {
    expect(stringToWeekdayCode("Hello")).toBe(-1);
    expect(stringToWeekdayCode("Monday")).toBe(DAYS.MONDAY);
    expect(stringToWeekdayCode("Mon")).toBe(DAYS.MONDAY);
    expect(stringToWeekdayCode("Tuesday")).toBe(DAYS.TUESDAY);
    expect(stringToWeekdayCode("Tue")).toBe(DAYS.TUESDAY);
    expect(stringToWeekdayCode("Wednesday")).toBe(DAYS.WEDNESDAY);
    expect(stringToWeekdayCode("Wed")).toBe(DAYS.WEDNESDAY);
    expect(stringToWeekdayCode("Thursday")).toBe(DAYS.THURSDAY);
    expect(stringToWeekdayCode("Thu")).toBe(DAYS.THURSDAY);
    expect(stringToWeekdayCode("Friday")).toBe(DAYS.FRIDAY);
    expect(stringToWeekdayCode("Fri")).toBe(DAYS.FRIDAY);
    expect(stringToWeekdayCode("Saturday")).toBe(DAYS.SATURDAY);
    expect(stringToWeekdayCode("Sat")).toBe(DAYS.SATURDAY);
    expect(stringToWeekdayCode("Sunday")).toBe(DAYS.SUNDAY);
    expect(stringToWeekdayCode("Sun")).toBe(DAYS.SUNDAY);
})

test('testset weekdayCodeToString', () => {
    expect(weekdayCodeToString(DAYS.SUNDAY)).toBe("Sunday");
    expect(weekdayCodeToString(DAYS.MONDAY)).toBe("Monday");
    expect(weekdayCodeToString(DAYS.TUESDAY)).toBe("Tuesday");
    expect(weekdayCodeToString(DAYS.WEDNESDAY)).toBe("Wednesday");
    expect(weekdayCodeToString(DAYS.THURSDAY)).toBe("Thursday");
    expect(weekdayCodeToString(DAYS.FRIDAY)).toBe("Friday");
    expect(weekdayCodeToString(DAYS.SATURDAY)).toBe("Saturday");
})


test('testset monthCodeToQuarter', () => {
    assertEquals(monthCodeToQuarter(MONTHS.JANUARY), 1);
    assertEquals(monthCodeToQuarter(MONTHS.FEBRUARY), 1);
    assertEquals(monthCodeToQuarter(MONTHS.MARCH), 1);
    assertEquals(monthCodeToQuarter(MONTHS.APRIL), 2);
    assertEquals(monthCodeToQuarter(MONTHS.MAY), 2);
    assertEquals(monthCodeToQuarter(MONTHS.JUNE), 2);
    assertEquals(monthCodeToQuarter(MONTHS.JULY), 3);
    assertEquals(monthCodeToQuarter(MONTHS.AUGUST), 3);
    assertEquals(monthCodeToQuarter(MONTHS.SEPTEMBER), 3);
    assertEquals(monthCodeToQuarter(MONTHS.OCTOBER), 4);
    assertEquals(monthCodeToQuarter(MONTHS.NOVEMBER), 4);
    assertEquals(monthCodeToQuarter(MONTHS.DECEMBER), 4);

    try {
        monthCodeToQuarter(-1);
        fail("Invalid Month Code should throw exception");
    } catch (e) {
    }
})

test('testset monthCodeToString', () => {
    assertEquals("January", monthCodeToString(MONTHS.JANUARY));
    assertEquals("February", monthCodeToString(MONTHS.FEBRUARY));
    assertEquals("March", monthCodeToString(MONTHS.MARCH));
    assertEquals("April", monthCodeToString(MONTHS.APRIL));
    assertEquals("May", monthCodeToString(MONTHS.MAY));
    assertEquals("June", monthCodeToString(MONTHS.JUNE));
    assertEquals("July", monthCodeToString(MONTHS.JULY));
    assertEquals("August", monthCodeToString(MONTHS.AUGUST));
    assertEquals("September", monthCodeToString(MONTHS.SEPTEMBER));
    assertEquals("October", monthCodeToString(MONTHS.OCTOBER));
    assertEquals("November", monthCodeToString(MONTHS.NOVEMBER));
    assertEquals("December", monthCodeToString(MONTHS.DECEMBER));
    try {
        monthCodeToString(-1);
        fail("Invalid month code should throw exception");
    } catch (e) {
    }
})

test('testset monthCodeToShortString', () => {
    assertEquals("Jan", monthCodeToShortString(MONTHS.JANUARY));
    assertEquals("Feb", monthCodeToShortString(MONTHS.FEBRUARY));
    assertEquals("Mar", monthCodeToShortString(MONTHS.MARCH));
    assertEquals("Apr", monthCodeToShortString(MONTHS.APRIL));
    assertEquals("May", monthCodeToShortString(MONTHS.MAY));
    assertEquals("Jun", monthCodeToShortString(MONTHS.JUNE));
    assertEquals("Jul", monthCodeToShortString(MONTHS.JULY));
    assertEquals("Aug", monthCodeToShortString(MONTHS.AUGUST));
    assertEquals("Sep", monthCodeToShortString(MONTHS.SEPTEMBER));
    assertEquals("Oct", monthCodeToShortString(MONTHS.OCTOBER));
    assertEquals("Nov", monthCodeToShortString(MONTHS.NOVEMBER));
    assertEquals("Dec", monthCodeToShortString(MONTHS.DECEMBER));

    try {
        monthCodeToString(-1);
        fail("Invalid month code should throw exception");
    } catch (e) {
    }

})

test('testset isValidWeekInMonthCode', () => {
    for ( let w = 0; w <= 4; w++) {
        assertTrue(isValidWeekInMonthCode(w));
    }
    assertFalse(isValidWeekInMonthCode(5));
})

test('testset leapyear', () => {
    assertFalse(isLeapYear(1900));
    assertFalse(isLeapYear(1901));
    assertFalse(isLeapYear(1902));
    assertFalse(isLeapYear(1903));
    assertTrue(isLeapYear(1904));
    assertTrue(isLeapYear(1908));
    assertFalse(isLeapYear(1955));
    assertTrue(isLeapYear(1964));
    assertTrue(isLeapYear(1980));
    assertTrue(isLeapYear(2000));
    assertFalse(isLeapYear(2001));
    assertFalse(isLeapYear(2100));
})

test('testset leapYearCount', () => {
    assertEquals(0, leapYearCount(1900));
    assertEquals(0, leapYearCount(1901));
    assertEquals(0, leapYearCount(1902));
    assertEquals(0, leapYearCount(1903));
    assertEquals(1, leapYearCount(1904));
    assertEquals(1, leapYearCount(1905));
    assertEquals(1, leapYearCount(1906));
    assertEquals(1, leapYearCount(1907));
    assertEquals(2, leapYearCount(1908));
    assertEquals(24, leapYearCount(1999));
    assertEquals(25, leapYearCount(2001));
    assertEquals(49, leapYearCount(2101));
    assertEquals(73, leapYearCount(2201));
    assertEquals(97, leapYearCount(2301));
    assertEquals(122, leapYearCount(2401));
})

test('testset lastDayOfMonth', () => {

    assertEquals(31, lastDayOfMonth(MONTHS.JANUARY, 1901));
    assertEquals(28, lastDayOfMonth(MONTHS.FEBRUARY, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.MARCH, 1901));
    assertEquals(30, lastDayOfMonth(MONTHS.APRIL, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.MAY, 1901));
    assertEquals(30, lastDayOfMonth(MONTHS.JUNE, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.JULY, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.AUGUST, 1901));
    assertEquals(30, lastDayOfMonth(MONTHS.SEPTEMBER, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.OCTOBER, 1901));
    assertEquals(30, lastDayOfMonth(MONTHS.NOVEMBER, 1901));
    assertEquals(31, lastDayOfMonth(MONTHS.DECEMBER, 1901));
    assertEquals(29, lastDayOfMonth(MONTHS.FEBRUARY, 1904));
})

xtest('testset addDays', () => {
    const newYear1900 = d(1, MONTHS.JANUARY, 1900);
    assertEquals(d(2, MONTHS.JANUARY, 1900), addDays(1, newYear1900));
    assertEquals(d(1, MONTHS.FEBRUARY, 1900), addDays(31, newYear1900));
    assertEquals(d(1, MONTHS.JANUARY, 1901), addDays(365, newYear1900));
    assertEquals(d(31, MONTHS.DECEMBER, 1904), addDays(5 * 365, newYear1900));
})


xtest('testset addMonths', () => {
    assertEquals(d(1, MONTHS.FEBRUARY, 1900), addMonths(1, d(1, MONTHS.JANUARY, 1900)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1900), addMonths(1, d(31, MONTHS.JANUARY, 1900)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1900), addMonths(1, d(30, MONTHS.JANUARY, 1900)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1900), addMonths(1, d(29, MONTHS.JANUARY, 1900)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1900), addMonths(1, d(28, MONTHS.JANUARY, 1900)));
    assertEquals(d(27, MONTHS.FEBRUARY, 1900), addMonths(1, d(27, MONTHS.JANUARY, 1900)));

    assertEquals(d(30, MONTHS.JUNE, 1900), addMonths(5, d(31, MONTHS.JANUARY, 1900)));
    assertEquals(d(30, MONTHS.JUNE, 1901), addMonths(17, d(31, MONTHS.JANUARY, 1900)));

    assertEquals(d(29, MONTHS.FEBRUARY, 1904), addMonths(49, d(31, MONTHS.JANUARY, 1900)));

})

xtest('testset addYears', () => {

    assertEquals(d(1, MONTHS.JANUARY, 1901), addYears(1, d(1, MONTHS.JANUARY, 1900)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1905), addYears(1, d(29, MONTHS.FEBRUARY, 1904)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1905), addYears(1, d(28, MONTHS.FEBRUARY, 1904)));
    assertEquals(d(28, MONTHS.FEBRUARY, 1904), addYears(1, d(28, MONTHS.FEBRUARY, 1903)));
})

xtest('testset getPreviousDayOfWeek', () => {

    assertEquals(d(24, MONTHS.FEBRUARY, 2006), getPreviousDayOfWeek(DAYS.FRIDAY, d(1, MONTHS.MARCH, 2006)));
    assertEquals(d(22, MONTHS.FEBRUARY, 2006), getPreviousDayOfWeek(DAYS.WEDNESDAY, d(1, MONTHS.MARCH, 2006)));
    assertEquals(d(29, MONTHS.FEBRUARY, 2004), getPreviousDayOfWeek(DAYS.SUNDAY, d(3, MONTHS.MARCH, 2004)));
    assertEquals(d(29, MONTHS.DECEMBER, 2004), getPreviousDayOfWeek(DAYS.WEDNESDAY, d(5, MONTHS.JANUARY, 2005)));

    try {
        getPreviousDayOfWeek(-1, d(1, MONTHS.JANUARY, 2006));
        fail("Invalid day of week code should throw exception");
    } catch (e) {
    }
})

xtest('testset getFollowingDayOfWeek', () => {
    assertEquals(d(1, MONTHS.JANUARY, 2005), getFollowingDayOfWeek(DAYS.SATURDAY, d(26, MONTHS.DECEMBER, 2004)));
    assertEquals(d(3, MONTHS.MARCH, 2004), getFollowingDayOfWeek(DAYS.WEDNESDAY, d(28, MONTHS.FEBRUARY, 2004)));

    try {
        getFollowingDayOfWeek(-1, d(1, MONTHS.JANUARY, 2006));
        fail("Invalid day of week code should throw exception");
    } catch (e) {
    }
})

xtest('testset getNearestDayOfWeek', () => {

    assertEquals(d(16, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(16, MONTHS.APRIL, 2006)));
    assertEquals(d(16, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(17, MONTHS.APRIL, 2006)));
    assertEquals(d(16, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(18, MONTHS.APRIL, 2006)));
    assertEquals(d(16, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(19, MONTHS.APRIL, 2006)));
    assertEquals(d(23, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(20, MONTHS.APRIL, 2006)));
    assertEquals(d(23, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(23, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SUNDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(17, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(17, MONTHS.APRIL, 2006)));
    assertEquals(d(17, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(18, MONTHS.APRIL, 2006)));
    assertEquals(d(17, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(19, MONTHS.APRIL, 2006)));
    assertEquals(d(17, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(20, MONTHS.APRIL, 2006)));
    assertEquals(d(24, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(24, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.MONDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(18, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.TUESDAY, d(18, MONTHS.APRIL, 2006)));
    assertEquals(d(18, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.TUESDAY, d(19, MONTHS.APRIL, 2006)));
    assertEquals(d(18, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.TUESDAY, d(20, MONTHS.APRIL, 2006)));
    assertEquals(d(18, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.TUESDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(25, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.TUESDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(19, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.WEDNESDAY, d(19, MONTHS.APRIL, 2006)));
    assertEquals(d(19, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.WEDNESDAY, d(20, MONTHS.APRIL, 2006)));
    assertEquals(d(19, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.WEDNESDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(19, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.WEDNESDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(20, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.THURSDAY, d(20, MONTHS.APRIL, 2006)));
    assertEquals(d(20, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.THURSDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(20, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.THURSDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(21, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.FRIDAY, d(21, MONTHS.APRIL, 2006)));
    assertEquals(d(21, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.FRIDAY, d(22, MONTHS.APRIL, 2006)));

    assertEquals(d(22, MONTHS.APRIL, 2006), getNearestDayOfWeek(DAYS.SATURDAY, d(22, MONTHS.APRIL, 2006)));

    try {
        getNearestDayOfWeek(-1, d(1, MONTHS.JANUARY, 2006));
        fail("Invalid day of week code should throw exception");
    } catch (e) {
    }
})

xtest('testset getEndOfCurrentMonth', () => {
    const d = SerialDate.createInstance(2);
    assertEquals(d(31, MONTHS.JANUARY, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.JANUARY, 2006)));
    assertEquals(d(28, MONTHS.FEBRUARY, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.FEBRUARY, 2006)));
    assertEquals(d(31, MONTHS.MARCH, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.MARCH, 2006)));
    assertEquals(d(30, MONTHS.APRIL, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.APRIL, 2006)));
    assertEquals(d(31, MONTHS.MAY, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.MAY, 2006)));
    assertEquals(d(30, MONTHS.JUNE, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.JUNE, 2006)));
    assertEquals(d(31, MONTHS.JULY, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.JULY, 2006)));
    assertEquals(d(31, MONTHS.AUGUST, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.AUGUST, 2006)));
    assertEquals(d(30, MONTHS.SEPTEMBER, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.SEPTEMBER, 2006)));
    assertEquals(d(31, MONTHS.OCTOBER, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.OCTOBER, 2006)));
    assertEquals(d(30, MONTHS.NOVEMBER, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.NOVEMBER, 2006)));
    assertEquals(d(31, MONTHS.DECEMBER, 2006), d.getEndOfCurrentMonth(d(1, MONTHS.DECEMBER, 2006)));
    assertEquals(d(29, MONTHS.FEBRUARY, 2008), d.getEndOfCurrentMonth(d(1, MONTHS.FEBRUARY, 2008)));
})

xtest('testset weekInMonthToString', () => {
    assertEquals("First", weekInMonthToString(FIRST_WEEK_IN_MONTH));
    assertEquals("Second", weekInMonthToString(SECOND_WEEK_IN_MONTH));
    assertEquals("Third", weekInMonthToString(THIRD_WEEK_IN_MONTH));
    assertEquals("Fourth", weekInMonthToString(FOURTH_WEEK_IN_MONTH));
    assertEquals("Last", weekInMonthToString(LAST_WEEK_IN_MONTH));
})

xtest('testset relativeToString', () => {
    assertEquals("Preceding", relativeToString(PRECEDING));
    assertEquals("Nearest", relativeToString(NEAREST));
    assertEquals("Following", relativeToString(FOLLOWING));
})

xtest('testset createInstance 1', () => {
    const date = createInstance(1, MONTHS.JANUARY, 1900);
    assertEquals(1, date.getDayOfMonth());
    assertEquals(MONTHS.JANUARY, date.getMonth());
    assertEquals(1900, date.getYYYY());
    assertEquals(2, date.toSerial());
})

xtest('testset createInstance 2', () => {
    assertEquals(d(1, MONTHS.JANUARY, 1900), createInstance(2));
    assertEquals(d(1, MONTHS.JANUARY, 1901), createInstance(367));
})

xtest('testset createInstance 3', () => {
    assertEquals(d(1, MONTHS.JANUARY, 1900), createInstance(new GregorianCalendar(1900, 0, 1).getTime()));
    assertEquals(d(1, MONTHS.JANUARY, 2006), createInstance(new GregorianCalendar(2006, 0, 1).getTime()));
})