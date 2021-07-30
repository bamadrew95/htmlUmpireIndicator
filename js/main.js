class UmpireInd {
  constructor() {
    // Button Selectors
    this.addHomePointBtn = document.querySelector('#add-home-score');
    this.addAwayPointBtn = document.querySelector('#add-away-score');
    this.addBallBtn = document.querySelector('#add-ball');
    this.addStrikeBtn = document.querySelector('#add-strike');
    this.addOutBtn = document.querySelector('#add-out');
    this.changeSideBtn = document.querySelector('#change-side');

    // New Game and confirmation dialogue box
    this.newGameBtn = document.querySelector('#new-game');
    this.confirmWindow = document.querySelector('#confirm-window');
    this.yesBtn = document.querySelector('#yes-btn');
    this.noBtn = document.querySelector('#no-btn');

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

    // New Game btn & dialogue
    this.newGameBtn.addEventListener('click', this.open_new_game_dialogue.bind(this));
    this.yesBtn.addEventListener('click', this.reset_all.bind(this));
    this.noBtn.addEventListener('click', this.close_new_game_dialogue.bind(this));
  }

  add_home_point() {
    var homeScore = this.homeScoreField.value;
    if (homeScore < 99) {
      this.homeScoreField.value++;
      setTimeout(function () {
        this.reset_pitch_count();
      }.bind(this), 1000);
    }
  }

  add_away_point() {
    var awayScore = this.awayScoreField.value;
    if (awayScore < 99) {
      this.awayScoreField.value++;
      setTimeout(function () {
        this.reset_pitch_count();
      }.bind(this), 1000);
    }
  }

  add_ball() {
    var balls = this.ballsField.value;
    if (balls < 4) {
      this.ballsField.value++;
    }

    if (balls >= 3) {
      setTimeout(function () {
        this.reset_pitch_count();
      }.bind(this), 1000);

    }
  }

  add_strike() {
    var strikes = this.strikesField.value;
    if (strikes < 3) {
      this.strikesField.value++;
    }

    if (strikes >= 2) {
      setTimeout(function () {
        this.reset_pitch_count();
        this.add_out();
      }.bind(this), 1000);

    }
  }

  add_out() {
    var outs = this.outsField.value;
    if (outs < 3) {
      this.outsField.value++;
      this.reset_pitch_count();
    }

    if (outs >= 2) {
      setTimeout(function () {
        this.outsField.value = 0;
        this.reset_pitch_count();
        this.change_side();
      }.bind(this), 1000);
    }
  }

  change_side() {
    this.reset_pitch_count();
    this.outsField.value = 0;

    if (this.inningField.value < 51 && this.sideSpan.innerHTML == 'Top') {
      this.sideSpan.innerHTML = 'Bottom';
    } else if (this.inningField.value < 50 && this.sideSpan.innerHTML == 'Bottom') {
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
    this.reset_pitch_count();
    this.outsField.value = 0;
    this.inningField.value = 1;
    this.sideSpan.innerHTML = 'Top';
    this.close_new_game_dialogue();
  }

  open_new_game_dialogue() {
    this.confirmWindow.classList.add('show');
   }

  close_new_game_dialogue() {
    this.confirmWindow.classList.remove('show');
  }
}

const umpireInd = new UmpireInd();