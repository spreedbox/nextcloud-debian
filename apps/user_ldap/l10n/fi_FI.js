OC.L10N.register(
    "user_ldap",
    {
    "Failed to delete the server configuration" : "Palvelinmäärityksen poistaminen epäonnistui",
    "The configuration is valid and the connection could be established!" : "Määritys on kelvollinen ja yhteys kyettiin muodostamaan!",
    "The configuration is invalid. Please have a look at the logs for further details." : "Määritykset ovat väärin. Tarkista loki saadaksesi lisätietoja.",
    "No action specified" : "Toimintoa ei määritetty",
    "Action does not exist" : "Toimintoa ei ole olemassa.",
    "Configuration incorrect" : "Määritykset väärin",
    "Configuration incomplete" : "Määritykset puutteelliset",
    "Configuration OK" : "Määritykset OK",
    "Select groups" : "Valitse ryhmät",
    "Please check the credentials, they seem to be wrong." : "Tarkista kirjautumistiedot, ne vaikuttavat olevan väärin.",
    "Please specify the port, it could not be auto-detected." : "Määritä portti, sitä ei kyetty havaitsemaan automaattisesti.",
    "More than 1,000 directory entries available." : "Yli 1000 hakemistotietuetta saatavilla.",
    "Do you really want to delete the current Server Configuration?" : "Haluatko varmasti poistaa nykyisen palvelinmäärityksen?",
    "Confirm Deletion" : "Vahvista poisto",
    "User found and settings verified." : "Käyttäjä löytyi ja asetukset vahvistettiin.",
    "An unspecified error occurred. Please check the settings and the log." : "Tapahtui määrittämätön virhe. Tarkista asetukset ja loki.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Yhteysvirhe LDAP:iin/AD:hen, tarkista palvelimen osoite, portti ja kirjautumistiedot.",
    "_%s group found_::_%s groups found_" : ["%s ryhmä löytynyt","%s ryhmää löytynyt"],
    "_%s user found_::_%s users found_" : ["%s käyttäjä löytynyt","%s käyttäjää löytynyt"],
    "Server" : "Palvelin",
    "Users" : "Käyttäjät",
    "Groups" : "Ryhmät",
    "Test Configuration" : "Testaa määritys",
    "Help" : "Ohje",
    "Search groups" : "Etsi ryhmiä",
    "Available groups" : "Käytettävissä olevat ryhmät",
    "Selected groups" : "Valitut ryhmät",
    "Edit LDAP Query" : "Muokkaa LDAP-kyselyä",
    "LDAP Filter:" : "LDAP-suodatin:",
    "Verify settings and count groups" : "Vahvista asetukset ja laske ryhmät",
    "LDAP / AD Username:" : "LDAP-/AD-käyttäjätunnus:",
    "LDAP / AD Email Address:" : "LDAP-/AD-sähköpostiosoite:",
    "Test Loginname" : "Testaa kirjautumisnimi",
    "Verify settings" : "Vahvista asetukset",
    "1. Server" : "1. Palvelin",
    "%s. Server:" : "%s. Palvelin:",
    "Add a new and blank configuration" : "Lisää uusi, tyhjä määritys",
    "Delete the current configuration" : "Poista nykyinen määritys",
    "Host" : "Isäntä",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Voit jättää protokollan määrittämättä, paitsi kun vaadit SSL:ää. Aloita silloin ldaps://",
    "Port" : "Portti",
    "Detect Port" : "Havaitse portti",
    "User DN" : "Käyttäjän DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Asiakasohjelman DN, jolla yhdistäminen tehdään, ts. uid=agent,dc=example,dc=com. Mahdollistaaksesi anonyymin yhteyden, jätä DN ja salasana tyhjäksi.",
    "Password" : "Salasana",
    "For anonymous access, leave DN and Password empty." : "Jos haluat mahdollistaa anonyymin pääsyn, jätä DN ja Salasana tyhjäksi ",
    "You can specify Base DN for users and groups in the Advanced tab" : "Voit määrittää käyttäjien ja ryhmien oletus DN:n (distinguished name) 'tarkemmat asetukset'-välilehdeltä  ",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Välttää automaattisia LDAP-pyyntöjä. Sopiva suurille instansseille, mutta vaatii LDAP-tietoutta.",
    "Manually enter LDAP filters (recommended for large directories)" : "Syötä LDAP-suodattimet manuaalisesti (suositeltu suurille hakemistoille)",
    "Verify settings and count users" : "Vahvista asetukset ja laske käyttäjät",
    "Saving" : "Tallennetaan",
    "Back" : "Takaisin",
    "Continue" : "Jatka",
    "LDAP" : "LDAP",
    "Advanced" : "Lisäasetukset",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Varoitus:</b> PHP:n LDAP-moduulia ei ole asennettu, taustaosa ei toimi. Pyydä järjestelmän ylläpitäjää asentamaan se.",
    "Connection Settings" : "Yhteysasetukset",
    "Backup (Replica) Host" : "Varmuuskopioinnin (replikointi) palvelin",
    "Backup (Replica) Port" : "Varmuuskopioinnin (replikoinnin) portti",
    "Disable Main Server" : "Poista pääpalvelin käytöstä",
    "Only connect to the replica server." : "Yhdistä vain replikointipalvelimeen.",
    "Turn off SSL certificate validation." : "Poista käytöstä SSL-varmenteen vahvistus",
    "in seconds. A change empties the cache." : "sekunneissa. Muutos tyhjentää välimuistin.",
    "Directory Settings" : "Hakemistoasetukset",
    "User Display Name Field" : "Käyttäjän näytettävän nimen kenttä",
    "Base User Tree" : "Oletuskäyttäjäpuu",
    "Group Display Name Field" : "Ryhmän \"näytettävä nimi\"-kenttä",
    "Base Group Tree" : "Ryhmien juuri",
    "Group-Member association" : "Ryhmän ja jäsenen assosiaatio (yhteys)",
    "Quota Field" : "Kiintiökenttä",
    "Quota Default" : "Oletuskiintiö",
    "in bytes" : "tavuissa",
    "Email Field" : "Sähköpostikenttä",
    "User Home Folder Naming Rule" : "Käyttäjän kotihakemiston nimeämissääntö",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Jätä tyhjäksi käyttäjänimi (oletusasetus). Muutoin anna LDAP/AD-atribuutti.",
    "Internal Username" : "Sisäinen käyttäjänimi",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Asiakasohjelman DN, jolla yhdistäminen tehdään, ts. uid=agent,dc=example,dc=com. Mahdollistaaksesi anonyymin yhteyden, jätä DN ja salasana tyhjäksi."
},
"nplurals=2; plural=(n != 1);");