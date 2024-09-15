# Unity on Cardano.

> `*` = All Pages

## Notes
- Avoids using #000 and #fff.
- Everything marked: `/** @NOTE - @AddCurator */` is needed to add new curators.
- Everything marked: `/** @TODO ...` needs attention.
- Make sure `/src/consts/kanban.ts` is always updated.
- Make sure `/src/consts/bugs.ts` is always updated.
- Update Homepage tokens, pools and apps within `/src/consts/global.ts`.
- We might use our own launchpad to launch the Unity token.
- Everything in `/src/verified/*` is used for data within Unity.

## Unity Features

- Dashboard `/`

- Kanban - `/development/kanban`
- Known Bug List and Fix progress status - `/development/bugs`
- Become a curator guide - `/development/bac`
- Development Overview - `/development`

- Token Pages - `/tokens/[slug]`
- View all tokens pages and search using name, ticker or category - `/tokens`
- Dexhunter Integration - `/tokens/*`

- Pool Pages - `/pools/[slug]`
- View all pool pages and search using name or ticker - `/pools`
- View current stakers - `/pools/*`

- Curators Pages - `/curators/[ID]`
- View all curator pages and search using name - `/curators`
- View all curations - `/curators/*`

## TODO
### Focus
- Build components page: display all variants of each compoent I.E: sizes, icons, colors etc.
- Write and build guide pages for curation of tokens and pools

### In Own Time
- Build launchpad page
- Build and explain below [launchpad process](#launchpad) guide

### No Timeframe but In-Progress
- Add more apps, pools and tokens!
- Look for curators!
- Redesign full thing, once again, but "remove" light mode and have it be our dark mode we've been working on and a monochrome/greyscale as the replacement for light mode.

## Launchpad

### Steps

**Phase 1**: The project or user requests Unity to launch a new token.
- TBD, the Unity community may vote on whether the launch should proceed.

**Phase 2**: The project or user agrees to the launch terms:
- Unity will create the token on the Cardano blockchain based on the project's specifications such as token name, ticker, and amount.
- The project or user will delegate a percentage of the total supply for sale.
- The project or user can decide the amount of ADA to raise.
- The project or user can choose the sale type:
  - No maximum address limit with a maximum buy limit.
  - Cap maximum address limit with a maximum buy limit.
- Unity will retain 0.1% of the supply.
- A delegate wallet for post-distribution will be designated.

**Phase 3**: Launchpad launch:
- The token will be displayed on the Unity launchpad.
- A unique address will be generated for the new token.
- This address will hold the project's tokens.
- Cardano users will use this address to purchase a stake.
- A timer will be set for the project's chosen duration in days, weeks, or months.

**Phase 4**: Launchpad end:
- Once the timer has expired, tokens will be distributed:
  - First, tokens are distributed to the individuals who bought a stake to ensure they are paid before anyone else.
  - Next, 0.1% of the total supply is sent to a Unity wallet. These tokens will be used for future giveaways and rewards for staking.
  - Finally, the project's team is paid the remaining Cardano and tokens to a previously delegated wallet.

**Phase 5**: Rate Unity:
- After a successful launch on Unity, we will continue to provide support to the new project.

### Distribution Method
- First, calculate the total number of coins contributed by all addresses.
- Then, for each address, determine their share by dividing the number of coins they contributed by the total number of coins contributed.
- Finally, multiply each address's share by the total number of tokens available for sale to determine how many tokens they receive.

### About the 0.1%
- Unity does not receive any ADA from launching tokens; instead, it opts for the launched tokens. These tokens will be used to fund faucet bots like FarmBot on Discord, marketing giveaways for the launching project, and rewards via staking.
