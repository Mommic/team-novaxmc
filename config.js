// Discord OAuth2 Konfiguration
const DISCORD_CONFIG = {
    // Deine Discord Application Credentials (musst du noch eintragen)
    CLIENT_ID: 'DEINE_CLIENT_ID_HIER',
    CLIENT_SECRET: 'DEIN_CLIENT_SECRET_HIER',
    REDIRECT_URI: 'http://localhost/callback.html', // Anpassen an deine Domain
    
    // Discord Server ID
    GUILD_ID: '1320742836976349244', // Aus dem Invite-Link extrahiert
    
    // Erlaubte Rollen (IDs musst du von deinem Discord Server holen)
    ALLOWED_ROLES: {
        'Owner': 'OWNER_ROLE_ID',
        'Teamleitung': 'TEAMLEITUNG_ROLE_ID',
        'Admin': 'ADMIN_ROLE_ID',
        'Developer': 'DEVELOPER_ROLE_ID',
        'Moderator': 'MODERATOR_ROLE_ID',
        'Supporter': 'SUPPORTER_ROLE_ID'
    },
    
    // OAuth2 Scopes
    SCOPES: ['identify', 'guilds', 'guilds.members.read']
};
