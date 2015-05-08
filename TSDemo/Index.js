//var x: number = 2;
//var y: number = 7;
//var z: number = x + y;
//alert(z);
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Models;
(function (Models) {
    var Person;
    (function (Person_1) {
        var Person = (function () {
            function Person(fn, ln) {
                this.firstName = fn;
                this.lastName = ln;
            }
            Object.defineProperty(Person.prototype, "nickname", {
                get: function () {
                    return this._nickname;
                },
                set: function (n) {
                    this._nickname = n;
                },
                enumerable: true,
                configurable: true
            });
            Person.prototype.greet = function () {
                if (this._nickname !== undefined) {
                    return "Hello " + this._nickname;
                }
                else {
                    return "Hello " + this.firstName + " " + this.lastName;
                }
            };
            return Person;
        })();
        Person_1.Person = Person;
        var Subscriber = (function (_super) {
            __extends(Subscriber, _super);
            function Subscriber(fn, ln) {
                _super.call(this, fn, ln);
                this.emails = [];
            }
            Subscriber.prototype.addEmail = function () {
                var emails = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    emails[_i - 0] = arguments[_i];
                }
                for (var i = 0; i < emails.length; i++) {
                    this.emails.push(emails[i]);
                }
                return this.emails.length;
            };
            return Subscriber;
        })(Person);
        Person_1.Subscriber = Subscriber;
        var Department = (function () {
            function Department() {
                this.people = [];
            }
            Department.prototype.addPerson = function () {
                var person = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    person[_i - 0] = arguments[_i];
                }
                for (var i = 0; i < person.length; i++) {
                    this.people.push(person[i]);
                }
                return this.people.length;
            };
            return Department;
        })();
        Person_1.Department = Department;
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
function showEmails(p) {
    var markup = "";
    if (p.emails !== undefined) {
        for (var i = 0; i < p.emails.length; i++) {
            markup += p.emails[i] + "<br />";
        }
    }
    else {
        markup = "No Emails on record";
    }
    return markup;
}
var Person = Models.Person;
$(document).ready(function () {
    var p = new Person.Person("Bob", "Smith");
    p.nickname = "Bobby";
    $("#greeting").html(p.greet());
    var s = new Person.Subscriber("John", "Doe");
    s.addEmail("john@work.edu", "john@play.org");
    $("#greeting2").html(s.greet());
    $("#greeting3").html(showEmails(p));
    var team = new Person.Department();
    var teamCount = team.addPerson(new Person.Person("Steve", "Fabian"), new Person.Person("Dave", "Smith"), new Person.Subscriber("John", "Doe"));
    $("#greeting4").html("Team Members: " + teamCount.toString());
});
//# sourceMappingURL=Index.js.map