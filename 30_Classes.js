// Class is Template Object for creating JS Objects
// It itself isin't an Object. But you can create using it

class Company {
    constructor(company_name, founder, founded_in) {
        this.company_name = company_name;
        this.founder = founder
        this.founded_in = founded_in
    }

    get_company_name() {
        return this.company_name
    }

    get_founder_name() {
        return this.founder
    }

    get_founded_year() {
        return this.founded_in
    }
}

let my_company = new Company("Abd Pvt Ltd", "arkalsekar", 343)
console.log(my_company.get_company_name())
console.log(my_company.get_founder_name())
console.log(my_company.get_founded_year())