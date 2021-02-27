# Simple Discord Bot for OsuMapMatcher

>Very simple and basic discord bot for [Xarib's OsuMapMatcher](https://github.com/Xarib/OsuMapMatcher). Built in a day, only has 1 command. This is my first time using github and 
>uploading a discord bot, so feel free to tell me anything as it can definitely be improved. Uses discord.js, Node.js (v12.13.1), and Xarib's API with node-fetch.

![image](https://user-images.githubusercontent.com/79728151/109369650-c1e3ec00-7862-11eb-9c57-08c0d5946c9b.png)
> Ignore the bot avatar, you can change it when creating the Bot application.

## Installation
- Download repository
- Open CMD
- 'cd bot_directory_folder' (wherever folder you want)
- 'npm install'
- Now go to the [Discord Developer Portal](https://discord.com/developers/applications) and create an application
- Go to Bot -> Create the bot, and copy your Token (make sure no one else but you sees it)
- Go back to your bot folder, open config.json
- Add your token / Prefix
- Go back to cmd and type 'node index.js'
- Invite link should send in cmd
- Open the link in broswer and replace the numbers after 'client_id=' to your client ID from your Discord application 

### Usage
- "{prefix}match <beatmap link or id> <# of beatmaps>" Up to 50 beatmaps can be sent.
- Example: !match https://osu.ppy.sh/beatmapsets/39804#osu/129891 5 || This will send 5 similar beatmaps 
  #### :warning: Note: Due to the nature of Discord's anti-spam, the bot might pause between each batch of messages (example: it will send a few messages, pause, then send more).
  > Also: I've discovered that some beatmap links / ID's just don't work, I'm going to assume that it's an API issue, so some maps might not work at all.
