import { TestBed } from '@angular/core/testing';

import {
    PreferencesService,
    PREF_DISTANCE,
    PREF_SCALE,
} from './preferences.service';
import { Preferences } from '../models/preferences';

describe('PreferencesService', () => {
    let service: PreferencesService;

    const prefs = <Preferences>{
        distance: 12,
        scale: 160,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PreferencesService],
        });

        service = TestBed.get(PreferencesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should save and load preferences', () => {
        window.localStorage.setItem(PREF_DISTANCE, '12');
        window.localStorage.setItem(PREF_SCALE, '160');

        service.save(prefs);
        const p = service.load();

        expect(p.distance).toEqual(12);
        expect(p.scale).toEqual(160);
    });

    // jest.spyOn(window.localStorage) is broken
    xit('should save preferences', () => {
        const setItem = jest.spyOn(window.localStorage, 'setItem');

        service.save(prefs);

        expect(setItem).toHaveBeenCalledWith(PREF_DISTANCE, '12');
        expect(setItem).toHaveBeenCalledWith(PREF_SCALE, '160');
    });

    // jest.spyOn(window.localStorage) is broken
    xit('should load preferences', () => {
        jest.spyOn(window.localStorage, 'getItem').mockImplementation(
            (key: string) => `${prefs[key]}`
        );

        const p = service.load();

        expect(p.distance).toEqual(12);
        expect(p.scale).toEqual(160);
    });
});
