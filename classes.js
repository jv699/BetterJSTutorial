//tutorial 20, classes

class Team {
    constructor(name) {
        this.name = name;
    }

    displayName() {
        console.log('We are the ' + this.name, '!');
    }
}

class HockeyTeam extends Team {
    constructor(name) { //subclasses must call super before they call this
        super(name); // sends 'name' to the super constructor
        this.type = 'Hockey';
    };

    scoreGoal() {
        console.log('He shoots, he scores!');
    }    

    //override
    displayName() {
        console.log('can we even do this?'); //yes, we can override
    }
};

class FootballTeam extends Team {
    constructor(name) { 
        super(name); 
        this.type = 'Football';
    };

    touchdown() {
        console.log('Go for two!');
    }    

}
const wings = new HockeyTeam('Red Wings');
const lions = new FootballTeam('Lions');

// console.log(wings.name);
wings.scoreGoal();
wings.displayName();
lions.touchdown();