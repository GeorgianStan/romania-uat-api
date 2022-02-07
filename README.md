# Romania-UAT-API

The project is a web API for the administrative units on the Romanian territory.

## Other linked materials

- [MDRAP-UAT](http://www.dpfbl.mdrap.ro/harta_judete.html)
- [Coduri Siruta](http://www.123coduri.ro/cauta-in-baza-de-date-coduri-siruta.php?vcodg1=%22%22#nomtop)

# Usage

The API is free to use and it can be found at https://romania-uat-api.herokuapp.com/

To access the documentation, navigate to [/documentation](https://romania-uat-api.herokuapp.com/documentation/).

## Rate limit

The current rate limit is set to **200** requests per IP in a **5m** window.

The following headers can be tracked to monitor the usage, if needed.

- `x-ratelimit-limit` - total number of available requests in the defined time period;
- `x-ratelimit-remaining` - the number of requests remained until the reset time;
- `x-ratelimit-reset` - the timestamp in seconds when the usage limit will be reset;

## Example usage

The `/api/v1/uat` endpoint can be used for all the required operations.
This endpoint can query the dataset based on a given [SIRUTA](https://ro.wikipedia.org/wiki/SIRUTA) code or based on the UAT type.

_Example 1_

Get information about **Brasov**.

`https://romania-uat-api.herokuapp.com/api/v1/uat?siruta=83`

```json
[
  {
    "label": "BRASOV",
    "type": 1,
    "siruta": 83,
    "mnemonic": "BV",
    "sirutaUp": 877
  }
]
```

_Example 2_

Get all the UATs from within **Brasov**.

`https://romania-uat-api.herokuapp.com/api/v1/uat?sirutaUp=83`

```json
[
  {
    "label": "HOLBAV",
    "type": 5,
    "siruta": 42472,
    "sirutaUp": 83
  },
  {
    "label": "MUNICIPIUL BRASOV",
    "type": 3,
    "siruta": 40198,
    "sirutaUp": 83
  },
  {
    "label": "MUNICIPIUL  CODLEA",
    "type": 3,
    "siruta": 40241,
    "sirutaUp": 83
  },
  ...
  ...
  ...
]
```

_Example 3_

Get all the UATs that are of type **JUDET**.

`https://romania-uat-api.herokuapp.com/api/v1/uat?type=1`

```json
[
  {
    "label": "ALBA",
    "type": 1,
    "siruta": 10,
    "mnemonic": "AB",
    "sirutaUp": 877
  },
  {
    "label": "ARAD",
    "type": 1,
    "siruta": 29,
    "mnemonic": "AR",
    "sirutaUp": 859
  },
  {
    "label": "ARGES",
    "type": 1,
    "siruta": 38,
    "mnemonic": "AG",
    "sirutaUp": 831
  },
  ...
  ...
  ...
]
```

# Contributing

Pull requests and stars are always welcome. Please check the guidelines.

# Stay in touch

Author - [Stan Georgian](https://twitter.com/GeorgianStan9)

Discussions - [Discussions Page](https://github.com/GeorgianStan/romania-uat-api/discussions)

# License

This project is licensed under the MIT License.
