const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1982, end: 2004},
	{name: "Company Three", category: "Auto", start: 1983, end: 2005},
	{name: "Company Four", category: "Retail", start: 1984, end: 2006},
	{name: "Company Five", category: "Tech", start: 1985, end: 2007},
	{name: "Company Six", category: "Finance", start: 1986, end: 2008},
	{name: "Company Seven", category: "Auto", start: 1990, end: 2009},
	{name: "Company Eight", category: "Retail", start: 1995, end: 2010},
	{name: "Company Nine", category: "Tech", start: 1992, end: 2011},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* ES6 New Array Methods */

// For Loop
for (let i = 0; i < companies.length; i++) {
	companies[i].name;
}
// forEach
companies.forEach((comp, index) => {
	return comp.name, index;
});

// Filter, 1 liner using es6, Get 21 and older
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

// Filter retail companies
const retailCompanies = companies.filter((comp) => comp.category === "Retail");
console.log(retailCompanies);

// Filter Companies Started in 80`s
const comp80s = companies.filter((comp) => comp.start < 1990);
console.log(comp80s);

// Filter Companies lasted 20 Years
const compLasted20Yrs = companies.filter((comp) => comp.end - comp.start >= 20);
console.log(compLasted20Yrs);

// Map - can create new array from the current array
const testMap = companies.map(
	(comp) => `${comp.name} [${comp.start} - ${comp.end}]`
);
console.log(testMap);

// Map - ages and get the square root
const squaredAge = ages.map((age) => Math.round(Math.sqrt(age)));

// Map - ages and multiply
const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(agesMap);

// Sort - companies from star date
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// Sort - sort ages from higher to lower
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

// Reduce vs For Loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log(ageSum);

// Reduce Written in ES6
let ageSumES6 = ages.reduce((total, age) => (total += age), 0);
console.log(ageSumES6);

// Reduce - get the total years of the companies
let companiesYears = companies.reduce(
	(total, company) => total + (company.end - company.start),
	0
);

console.log(companiesYears);

// Combine Higher Array Order Methods
const combined = ages
	.map((age) => age * 2)
	.filter((age) => age >= 40)
	.sort((a, b) => a - b)
	.reduce((a, b) => a + b, 0);

console.log(combined);
