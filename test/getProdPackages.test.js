const { getProdPackages } = require('../lisense');

const BASE_DIR = process.cwd();

describe('function getProdPackages', () => {

    test('list the correct prod packages for this module', async () => {

        const pkgs = await getProdPackages(BASE_DIR, false);

        expect(pkgs).toStrictEqual([
            "chalk",
            "commander",
            "debug",
            "ms",
            "ansi-styles",
            "supports-color",
            "has-flag",
            "@types/color-name",
            "color-convert",
            "color-name"
        ]);
    });

    test('check with pedantic mode successfull', async () => {

        const pkgs = await getProdPackages(BASE_DIR, true);

        expect(pkgs).toStrictEqual([
            "chalk",
            "commander",
            "debug",
            "ms",
            "ansi-styles",
            "supports-color",
            "has-flag",
            "@types/color-name",
            "color-convert",
            "color-name"
        ]);
    });

});