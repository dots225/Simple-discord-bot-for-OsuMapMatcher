# Simple Discord Bot for OsuMapMatcher

>Very simple and basic discord bot for [Xarib's OsuMapMatcher](https://github.com/Xarib/OsuMapMatcher). Built in a day, only has 1 command. This is my first time using github and 
>uploading a discord bot, so feel free to tell me anything. Uses discord.js, Node.js (v12.13.1), and Xarib's API with node-fetch.

## Installation
- Download repository
- Open CMD
- 'cd bot_directory_folder' (wherever folder you want)
- 'npm install'
- Go back to your bot folder, open config.json
- Add your token / Prefix
- Go back to cmd and type 'node index.js'
- Invite link should send in cmd

### Usage
- "{prefix}match <beatmap link or id> <# of beatmaps>" Up to 50 beatmaps can be sent.
  #### :warning: Note: Due to the nature of Discord's anti-spam, the bot might pause between each batch of messages (example: it will send a few messages, pause, then send more).
  
