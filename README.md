# Garden Prototype

Garden is the prototype web application for Tulip, a dressing store that rents and sells stock.

This first version is a static working prototype with mock data. It is meant to confirm the daily workflow before connecting Supabase or buying hosting/domain services.

MVP 0 uses only:

- GitHub for the code.
- Vercel for the online test deployment.
- Browser local storage for temporary demo changes.

Supabase is intentionally deferred until MVP 1, after Tulip confirms the workflow is correct.

## Current Prototype Includes

- Dashboard summary for available stock, rented items, returns, and balances.
- Inventory table with search and status filtering.
- Add stock item dialog using local browser storage.
- Rentals table.
- Sales table.
- Customer directory.
- Accounting-lite summary.
- Staff task board.
- Buying list.

## How To Open

Open `index.html` in a browser.

## How To Deploy On Vercel

1. Create a GitHub repository for Garden.
2. Upload these files to the repository root.
3. In Vercel, import the GitHub repository.
4. Use the default static project settings.
5. Deploy.

No environment variables are needed for MVP 0.

## Important Limitation

Because MVP 0 has no database, data is stored only in the current browser. It is good for workflow testing, but it is not ready for multiple staff members sharing live shop data.

## Recommended Next Step

Before adding Supabase, finish the local-data workflows:

- Customer creation.
- Rental creation.
- Sale creation.
- Payment records.
- Activity log.
- Basic report filters.

After the workflow feels right, convert this prototype into a Next.js app and connect Supabase for:

- Authentication.
- Database storage.
- Item photos.
- Role permissions.
- Shared staff access.
