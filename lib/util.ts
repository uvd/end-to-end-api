
export default class Util {

    public static getEnv() {
        if (process.env.CUSTOMER_ONBOARDING_ENV) {
            return process.env.CUSTOMER_ONBOARDING_ENV;
        }

        return 'dev';
    }

    public static convertCamelCaseToTitleCase(text)
    {
        var result = text.replace( /([A-Z])/g, " $1" );

        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}