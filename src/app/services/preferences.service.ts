import { Injectable } from '@angular/core';
import { Preferences } from '../models/preferences';

export const PREF_DISTANCE = 'distance';
export const PREF_SCALE = 'scale';

@Injectable({
    providedIn: 'root'
})
export class PreferencesService {
    constructor() { }

    save(prefs: Preferences) {
        window.localStorage.setItem(PREF_DISTANCE, prefs.distance.toString());
        window.localStorage.setItem(PREF_SCALE, prefs.scale.toString());
    }

    load(): Preferences {
        return {
            distance: +window.localStorage.getItem(PREF_DISTANCE),
            scale: +window.localStorage.getItem(PREF_SCALE)
        };
    }
}
