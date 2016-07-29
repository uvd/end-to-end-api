Customer Onboarding
===================

Setup
-----

The following environment variables must be set:

* CUSTOMER_ONBOARDING_SENDGRID_API_KEY
* CUSTOMER_ONBOARDING_AWS_ACCESS_KEY
* CUSTOMER_ONBOARDING_AWS_SECRET_KEY

And outside of the development environment:

* CUSTOMER_ONBOARDING_ENV

Run Locally
-----------

```node dist/lib/main.js```

When files have been changed, run:

```npm run build```
