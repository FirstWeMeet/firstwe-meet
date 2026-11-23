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
| FIRSTNAME | Sanne |
| VRIEND | Lisa (alleen voor samen aangemeld) |
| TIKKIE | https://tikkie.me/pay/... (eigen Tikkie van €20 per persoon) |

Lijsten: **Match – alleen**, **Match – samen**, **Betaald**.

## Foto's
Upload `foto-logo.jpg`, `foto-match.jpg` en `foto-piano.jpg` in Brevo (de gescheurde randjes zitten al in de foto)
en vervang die bestandsnamen in de HTML door de links die Brevo geeft.

## Automatische bevestiging
1. Brevo → Automations → nieuwe automation.
2. Trigger: **contact toegevoegd aan lijst "Betaald"**.
3. Actie: **e-mail sturen** → `bevestiging-mail.html`.

Zie je in Tikkie dat iemand betaald heeft, zet die persoon dan op de lijst "Betaald".
Brevo stuurt de bevestiging dan vanzelf.

## Mobiel (stijl A)
Alle vier de mails zijn nu geschikt voor mobiel:
- De koptekst staat boven de foto, zodat de foto niet meer wordt uitgerekt.
- De tekst is groter (16–17px) en de knop is op je telefoon zo breed als het scherm.
- Foto-links: het logo staat op `img.mailinblue.com`, de twee foto's op `img-thumb.mailinblue.com`. Alleen deze links werken.
