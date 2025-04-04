# Setup

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# using npm
npm run dev

# using pnpm
pnpm dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# Instructions

## Todo:

1. Create the Media Player UI at `src/static/media-player-ui-original.jpg` with HTML and CSS, you can use Tailwindcss
2. Make it Responsive with a mobile first approach
3. Fetch Artists, Trending Songs, Charts, Genres, and Playlists from the mock API endpoints in `src/routes/api`.
4. In your Markup, connect the image keys in your data with the image files in `src/static`.

## Familiar Concepts

The assignment assumes you are familiar with the following concepts:

### Markup

- Basic HTML and CSS Layout Concepts

### Javascript

- Storing data in **variables**
- Basic Javascript data types, i.e. Number, String, Boolean, Array, Object, Null, Undefined
- Accessing data in both indexed collections (Arrays) and unindexed collections (Objects)
- Array looping, mapping, filtering, reducing
- Functions, and parsing data into functions

### Svelte

- **$state()** rune
- **$derived()** rune
- **$props()** props, and working with default props which are **data, and children**
- Displaying data with an each **Each Block**

## New Concepts

New concepts to learn include:

### Javascript

- Async and Await concept
- Fetch API
- Array sorting

## Svelte

- Server side and Client side concepts
- Data fetching
- State Management
- **$lib** folder
- \*\*lib/server

# Resources

- Icons (heroicons.com)[https://heroicons.com/]

# Tips

- Create an icons folder inside `src/lib` and save your svg icons inside `.svelte` files
- Design the big ideas first, i.e the large layout blocks first, make them responsive, then work at the details
