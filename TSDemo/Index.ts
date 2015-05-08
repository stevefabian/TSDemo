//var x: number = 2;
//var y: number = 7;
//var z: number = x + y;
//alert(z);

module Utils {
    export class Notifications {
        alert(s: string): void {
            alert(s);
        }
    }
}

module Models.Person {

    export interface IPerson {
        firstName: string;
        lastName: string;
        emails?: string[];
        addEmail?: (...emails: string[]) => number;
    }

    export class Person implements IPerson {
        firstName: string;
        lastName: string;
        private _nickname: string;
        constructor(fn: string, ln: string) {
            this.firstName = fn;
            this.lastName = ln;
        }
        get nickname(): string {
            return this._nickname;
        }
        set nickname(n: string) {
            this._nickname = n;
        }
        greet() {
            if (this._nickname !== undefined) {
                return "Hello " + this._nickname;
            } else {
                return "Hello " + this.firstName + " " + this.lastName;
            } 
        }
    }

    export class Subscriber extends Person implements IPerson {
        emails: string[];
        constructor(fn: string, ln: string) {
            super(fn, ln);
            this.emails = [];
        }
        addEmail(...emails: string[]) {
            for (var i = 0; i < emails.length; i++) {
                this.emails.push(emails[i]);
            }
            return this.emails.length;
        }
    }

    export class Department  {
        people: IPerson[] = [];
        addPerson(...person: IPerson[]) {
            for (var i = 0; i < person.length; i++) {
                this.people.push(person[i]);
            }
            return this.people.length;
        }
    }
}

function showEmails(p: Person.IPerson) {
    var markup = "";
    if (p.emails !== undefined) {
        for (var i = 0; i < p.emails.length; i++) {
            markup += p.emails[i] + "<br />";
        }
    } else {
        markup = "No Emails on record";
    }
    return markup;
}

import Person = Models.Person;

$(document).ready(() => {

    var p = new Person.Person("Bob", "Smith");
    p.nickname = "Bobby";
    $("#greeting").html(p.greet());

    var s = new Person.Subscriber("John", "Doe");
    s.addEmail(
        "john@work.edu",
        "john@play.org");
    $("#greeting2").html(s.greet());
    $("#greeting3").html(showEmails(p));

    var team = new Person.Department();
    var teamCount = team.addPerson(
        new Person.Person("Steve", "Fabian"),
        new Person.Person("Dave", "Smith"),
        new Person.Subscriber("John", "Doe")
        );

    $("#greeting4").html("Team Members: " + teamCount.toString());



    var vm = {

        msg: ko.observable("Knockout!"),
        team: ko.observableArray(team.people)

    }

    ko.applyBindings(vm);

    var alerter = new Utils.Notifications();
    alerter.alert(vm.msg());

});