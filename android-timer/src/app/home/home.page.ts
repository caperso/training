import { Component } from '@angular/core';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  elapsed: any = {
    h: '00',
    m: '00',
    s: '00',
  }
  percent: number = 0
  radius: number = 100
  fullTime: any = '00:01:30'
  timer: any = false
  progress: any = 0
  minutes: number = 1
  seconds: any = 30
  overallTimer: any = false

  countDownTimer: any = false
  timeLeft: any = {
    m: '00',
    s: '00'
  }
  remainingTime = `${this.timeLeft.m}:${this.timeLeft.s}`

  startTimer() {
    // decide to start a new timer or stop and then clean up params
    if (this.timer) {
      clearInterval(this.timer)
      clearInterval(this.countDownTimer)
    }
    if (!this.overallTimer) {
      this.progressTimer();
    }

    this.timer = false
    this.percent = 0
    this.progress = 0

    let timeSplit = this.fullTime.split(':')
    this.minutes = timeSplit[1]
    this.seconds = timeSplit[2]

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds, 10)
    let secondsLeft = totalSeconds

    let forwardsTimer = () => {
      if (this.percent == this.radius) clearInterval(this.timer)
      this.percent = Math.floor((this.progress / totalSeconds) * 100)
      ++this.progress
    }
    let backwardsTimer = () => {
      if (secondsLeft >= 0) {
        this.timeLeft.m = Math.floor(secondsLeft / 60)
        this.timeLeft.s = secondsLeft - (60 * this.timeLeft.m)
        this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`
        secondsLeft--;
      }
    }

    forwardsTimer()
    backwardsTimer()

    // timers start after 1 second later
    this.countDownTimer = setInterval(backwardsTimer, 1000)
    this.timer = setInterval(forwardsTimer, 1000)
  }

  stopTimer() {
    clearInterval(this.countDownTimer);
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    this.countDownTimer = false;
    this.overallTimer = false;
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00'
    }
    this.timeLeft = {
      m: '00',
      s: '00'
    }
    this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`;
    // this.insomnia.allowSleepAgain()
  }

  progressTimer() {
    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime()
      let distance = now - countDownDate.getTime()

      this.elapsed.h = this.pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2)
      this.elapsed.m = this.pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 2)
      this.elapsed.s = this.pad(Math.floor((distance % (1000 * 60)) / 1000), 2)
    }, 1000)
  }

  pad(num, size) {
    let s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }
}
