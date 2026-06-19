**Title**: HTTP/2 'Bomb' Vulnerability Allows Remote DoS
**Author**: Haden Pereira
**Date**: June 7, 2026
**Tags**: HTTP/2, Denial-of-Service, Vulnerability, Cybersecurity, Mitigation
**Read Time**: 4 min
**Excerpt**: A clear, practical explanation of an HTTP/2 "bomb" that can cause remote denial-of-service, how to spot it, and simple steps to reduce risk.

---

# HTTP/2 'Bomb' Vulnerability — simple explanation and fixes

HTTP/2 is a modern web protocol that helps pages load faster by sending multiple requests over a single connection. But when servers don't limit how much work a single connection can cause, attackers can overload those servers remotely. This kind of problem is often called an HTTP/2 "bomb" because a small amount of traffic can blow up a server's capacity.

This article explains the issue in plain language, shows how you can notice it, and lists easy, practical steps to reduce risk.

## How it works (plain terms)

- A single connection can carry many requests at once.
- An attacker opens one or a few connections but sends many crafted requests or partial data that force the server to use memory and CPU.
- Over time, the server runs out of memory or threads and stops serving real users — a denial-of-service (DoS).

Think of it like someone sliding dozens of heavy boxes through a small door: the door stays open but the room gets full quickly.

## Why it matters

- Looks normal: attack traffic can resemble normal web traffic, making it hard to spot.
- Efficient: attackers can cause big problems with relatively little bandwidth.
- Wide surface: public-facing proxies, CDNs, and web servers that support HTTP/2 can all be affected.

## How to spot an attack

- Watch for sudden spikes in memory or CPU without matching increases in normal traffic.
- See many active requests tied to a few client addresses or connections.
- Logs showing repeated errors, long-lived connections, or lots of small requests from the same source.

Basic quick check:

```bash
curl -v --http2 https://example.com/
```

If you see many connections with lots of active requests, investigate further.

## Simple, practical mitigations

1. Keep software updated
  - Apply updates for your web server, proxy, or CDN. Vendors often patch known issues quickly.

2. Limit how much a single connection can do
  - Set reasonable caps on how many simultaneous requests one connection can open.
  - Limit request header sizes and overall request size.

3. Rate-limit connections and requests
  - Throttle clients that open too many requests or connections in a short time.

4. Use an edge layer or WAF
  - Let a CDN or hardened proxy handle HTTP/2 at the edge and protect backend servers.

5. Isolate services
  - Run critical services on separate instances so one overloaded service doesn't take everything down.

6. Temporary fallback
  - If under attack and you can't fix it immediately, consider disabling HTTP/2 on the affected endpoint until fixed.

## Incident response checklist (quick)

- Identify which component is affected (edge, proxy, app server).
- Throttle or block obvious offenders while keeping other traffic flowing.
- Collect logs and any packet captures for analysis.
- Apply patches and updated limits across systems.

## Final note for developers and operators

Design servers to limit work per connection and fail fast on suspicious inputs. Regularly test your stack with load and resilience tests so you know how it behaves under stress.

---

**References**
- HTTP/2 overview: https://datatracker.ietf.org/doc/html/rfc7540
