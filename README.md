<p align="center"><img src="https://raw.githubusercontent.com/LightHostingFree/free-domain/main/media/icon.png" height="128"></p>
<h1 align="center">Light Hosting</h1>

<p align="center">
  <a href="https://github.com/LightHostingFree/free-domain/tree/main/domains"><img src="https://img.shields.io/github/directory-file-count/LightHostingFree/free-domain/domains?label=domains&style=for-the-badge&type=file"></a>
  <a href="https://github.com/LightHostingFree/free-domain/issues"><img src="https://img.shields.io/github/issues-raw/LightHostingFree/free-domain?label=issues&style=for-the-badge"></a>
  <a href="https://github.com/LightHostingFree/free-domain/pulls"><img src="https://img.shields.io/github/issues-pr-raw/LightHostingFree/free-domain?label=pull%20requests&style=for-the-badge"></a>
</p>

<p align="center">Free subdomains for personal sites, open-source projects, and more.</p>
<p align="center">Want to find services similar to this? Take a look on <a href="https://github.com/open-domains/register">Open Domains</a>.</p>

## Notice
NS records are no longer supported. Existing domains are unaffected.

## Donate
If you like this service and want us to continue running it, please consider donating!

[![PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/andrewstechyoutube)

### Discord Server
Make sure to join our Discord server:
https://discord.gg/kVjkg6VBwa

## Domains

| Available Domains |
|:-:|
| [`*.is-cool.dev`](https://is-cool.dev) |
| [`*.is-local.org`](https://is-local.org) |
| [`*.is-not-a.dev`](https://is-not-a.dev) |
| [`*.localplayer.dev`](https://localplayer.dev) |

> Wildcard domains (like `*.example.is-not-a.dev`) are supported too, but the reason for their registration should be very clear and described in detail.

[badge-cf]:https://shields.io/badge/%20-cloudflare-blue?logo=cloudflare&style=plastic?cacheSeconds=3600
[badge-dnssec]:https://shields.io/badge/%20-DNSSEC-blue?logo=moleculer&logoColor=white&style=plastic?cacheSeconds=3600
[badge-ssl]:https://shields.io/badge/SSL-Required-blue?style=plastic?cacheSeconds=3600

### Unsupported Services
We currently do not support Cloudflare (for NS), Netlify (for website) or Vercel (for websites).

This will hopefully be fixed soon.

### Settings

| Setting | [`is-cool.dev`](https://is-cool.dev) | [`is-local.org`](https://is-local.org) | [`is-not-a.dev`](https://is-not-a.dev) | [`localplayer.dev`](https://localplayer.dev) |
|-|-|-|-|-|
| [DNSSEC][dnssec] | ✅ | ✅ | ✅ | ✅ |
| Email | ✅ | ✅ | ✅ | ✅ |
| SSL/TLS* | [Full][ssl-full] | [Full][ssl-full] | [Full][ssl-full] | [Full][ssl-full] |
| Always Use HTTPS* | ✅ | ✅ | ✅ | ✅ |
| HTTP Strict Transport Security (HSTS) | ✅ | ✅ | ✅ | ✅ |
| Minimum TLS Version* | 1.2 | 1.2 | 1.2 | 1.2 |
| Opportunistic Encryption, TLS 1.3* | ✅ | ✅ | ✅ | ✅ |
| WAF (Web Application Firewall)* | Medium Security Level | Medium Security Level | Medium Security Level | Medium Security Level |
| Browser Integrity Check* | ✅ | ✅ | ✅ | ✅ |
| [Caching Level][caching-levels], Browser Cache TTL* | Standard, 4 hours | Standard, 4 hours | Standard, 4 hours | Standard, 4 hours |

\*Only available when your domain has Cloudflare's proxy (`"proxied": true`) enabled

[dnssec]:https://developers.cloudflare.com/dns/additional-options/dnssec
[ssl-full]:https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full
[caching-levels]:https://developers.cloudflare.com/cache/how-to/set-caching-levels

## Register

### CLI (*recommended*)
1. Install the CLI using this command:

```
npm install @light-hosting/cli -g
```

2. Login to the CLI:

```
light-hosting login
```

3. Register a domain and follow the steps:

```
light-hosting register
```

### Manual
1. **Star** and **[Fork](https://github.com/LightHostingFree/free-domain/fork)** this repository.
2. Add a new file called `example.domain.json` in the `/domains` folder to register `example` subdomain.
3. Edit the file (below is just an **example**, provide a **valid** JSON file with your needs, the format is very strict.

```json
{
    "domain": "is-a-fullstack.dev",
    "subdomain": "example",

    "owner": {
        "email": "hello@example.com"
    },

    "records": {
        "A": ["1.1.1.1", "1.0.0.1"],
        "AAAA": ["2606:4700:4700::1111", "2606:4700:4700::1001"],
        "CNAME": "example.com",
        "MX": [
            {
                "priority": 10,
                "value": "mx.example.com"
            }
        ],
        "TXT": [
            {
                "name": "@",
                "value": "example_verification=1234567890"
            }
        ]
    },

    "proxied": false
}
```

4. Your pull request will be reviewed and merged. Please don't ignore the pull request checklist. If you ignore the checklist, your pull request will be ignored too. _Make sure to keep an eye on it in case we need you to make any changes!_
5. After the pull request is merged, please allow up to 24 hours for the changes to propagate _(usually, it takes 5..15 minutes)_
6. Enjoy your new domain!

*Domains used for illegal purposes will be removed and permanently banned. Please, provide a clear description of your resource in the pull request.*

### License
This project is under a [MIT License](https://github.com/LightHostingFree/free-domain/blob/main/LICENSE).
