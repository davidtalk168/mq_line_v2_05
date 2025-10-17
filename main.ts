function Left () {
    for (let index = 0; index < 5; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, SP * 0.7)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(XN)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            break;
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            break;
        }
    }
}
function Forward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, SP)
}
function Right () {
    for (let index = 0; index < 5; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, SP * 0.7)
        basic.pause(XN)
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            break;
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            break;
        }
    }
}
function Backward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, SP * 0.3)
    basic.pause(XN)
}
let NU = 0
let SP = 0
let XN = 0
XN = 0
SP = 100
let LR = 1
basic.forever(function () {
    NU = SP
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        LR = 1
        Forward()
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            LR = 0
            Left()
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                LR = 2
                Right()
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    Backward()
                }
            }
        }
    }
})
basic.forever(function () {
    basic.showNumber(LR)
})
