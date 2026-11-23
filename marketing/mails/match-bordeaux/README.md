# Match- en bevestigingsmails (Brevo + Tikkie)

| Bestand | Voor wie |
|---|---|
| `match-mail.html` | Iemand die zich alleen heeft aangemeld en een match heeft |
| `match-mail-samen.html` | Iemand die zich samen met een vriend(in) heeft aangemeld |
| `bevestiging-mail.html` | Iedereen die betaald heeft |

## Contacten in Brevo
Kolommen (attributen) per contact:

| Attribuut | Voorbeeld |
|---|---|
| EMAIL | sanne@voorbeeld.nl |
| VOORNAAM | Sanne |
| VRIEND | Lisa (alleen voor samen aangemeld) |
| TIKKIE | https://tikkie.me/pay/... (eigen Tikkie van €20 per persoon) |

Lijsten: **Match – alleen**, **Match – samen**, **Betaald**.

## Foto's
Upload `logo.png`, `cocktails-heel.jpg`, `piano.jpg`, `torn.png` en `torn-top.png` in Brevo
en vervang die bestandsnamen in de HTML door de links die Brevo geeft.

## Automatische bevestiging
1. Brevo → Automations → nieuwe automation.
2. Trigger: **contact toegevoegd aan lijst "Betaald"**.
3. Actie: **e-mail sturen** → `bevestiging-mail.html`.

Zie je in Tikkie dat iemand betaald heeft, zet die persoon dan op de lijst "Betaald".
Brevo stuurt de bevestiging dan vanzelf.
