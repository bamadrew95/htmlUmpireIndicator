class UmpireInd {
  constructor() {
    // Button Selectors
    this.addHomePointBtn = document.querySelector('#add-home-score');
    this.addAwayPointBtn = document.querySelector('#add-away-score');
    this.addBallBtn = document.querySelector('#add-ball');
    this.addStrikeBtn = document.querySelector('#add-strike');
    this.addOutBtn = document.querySelector('#add-out');
    this.changeSideBtn = document.querySelector('#change-side');
    this.resetBtn = document.querySelector('#reset');

    // Input Field Selectors
    this.homeScoreField = document.querySelector('#score-home');
    this.awayScoreField = document.querySelector('#score-away');
    this.ballsField = document.querySelector('#balls');
    this.strikesField = document.querySelector('#strikes');
    this.outsField = document.querySelector('#outs');
    this.inningField = document.querySelector('#inning');
    this.sideSpan = document.querySelector('#side');

    // Call Events Function to add event listeners
    this.events();
  }

  events() {
    this.addHomePointBtn.addEventListener('click', this.add_home_point.bind(this));
    this.addAwayPointBtn.addEventListener('click', this.add_away_point.bind(this));
    this.addBallBtn.addEventListener('click', this.add_ball.bind(this));
    this.addStrikeBtn.addEventListener('click', this.add_strike.bind(this));
    this.addOutBtn.addEventListener('click', this.add_out.bind(this));
    this.changeSideBtn.addEventListener('click', this.change_side.bind(this));
    this.resetBtn.addEventListener('click', this.reset_all.bind(this));
  }

  add_home_point() {
    var homeScore = this.homeScoreField.value;
    if (homeScore < 99) {
      this.homeScoreField.value++;
      this.reset_pitch_count();
    }
  }

  add_away_point() {
    var awayScore = this.awayScoreField.value;
    if (awayScore < 99) {
      this.awayScoreField.value++;
      this.reset_pitch_count();
    }
  }

  add_ball() {
    var balls = this.ballsField.value;
    if (balls < 3) {
      this.ballsField.value++;
    }

    if (balls == 3) {
      this.reset_pitch_count();
    }
  }

  add_strike() {
    var strikes = this.strikesField.value;
    if (strikes < 2) {
      this.strikesField.value++;
    }

    if (strikes == 2) {
      this.reset_pitch_count();
      this.add_out();
    }
  }

  add_out() {
    var outs = this.outsField.value;
    if (outs < 2) {
      this.outsField.value++;
      this.reset_pitch_count();
    }

    if (outs == 2) {
      this.outsField.value = 0;
      this.reset_pitch_count();
      this.change_side();
    }
  }

  change_side() {
    this.reset_pitch_count();
    this.outsField.value = 0;

    if (this.inningField.value < 51 && this.sideSpan.innerHTML == 'Top') {
      this.sideSpan.innerHTML = 'Bottom';
    } else if (this.inningField.value < 50 && this.sideSpan.innerHTML == 'Bottom'){
      this.inningField.value++;
      this.sideSpan.innerHTML = 'Top';
    }
  }

  reset_pitch_count() {
    this.ballsField.value = 0;
    this.strikesField.value = 0;
  }

  reset_all() {
    this.homeScoreField.value = 0;
    this.awayScoreField.value = 0;
    this.ballsField.value = 0;
    this.strikesField.value = 0;
    this.outsField.value = 0;
    this.inningField.value = 1;
    this.sideSpan.innerHTML = 'Top';
  }
}

const umpireInd = new UmpireInd();