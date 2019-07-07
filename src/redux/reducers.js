// @flow

import {
    createStore,
    combineReducers
}   from 'redux';

import {
    SET_NUM_SAMPLES,
    SET_NUM_BOUNCES,
    SET_CAMERA_FOV,
    SET_SHADING_METHOD,

    FLAT_SHADING,
}   from './actions.js'

// ----------------------------------------------------------------
// default states
//
const defaultNumSamples     = 300;
const defaultNumBounces     = 4;
const defaultCameraFov      = 30;
const defaultShadingMethod  = FLAT_SHADING;

// ----------------------------------------------------------------
// reducers
//
function numSamples(state = defaultNumSamples, action) {
    if (action.type === SET_NUM_SAMPLES) {
        return action.numSamples;
    }
    return state;
}

function numBounces(state = defaultNumBounces, action) {
    if (action.type === SET_NUM_BOUNCES) {
        return action.numBounces;
    }
    return state;
}

function cameraFov(state = defaultCameraFov, action) {
    if (action.type === SET_CAMERA_FOV) {
        return action.cameraFov;
    }
    return state;
}

function shadingMethod(state = defaultShadingMethod, action) {
    if (action.type === SET_SHADING_METHOD) {
        return action.shadingMethod;
    }
    return state;
}

// ----------------------------------------------------------------
// redux store
//
export const reduxStore = createStore(
    combineReducers({ numSamples, numBounces, cameraFov, shadingMethod })
);
