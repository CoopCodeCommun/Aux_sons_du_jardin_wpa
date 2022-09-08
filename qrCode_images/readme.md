# Générer le qr-code

## Intaller "qrencode"
```
sudo apt-get install qrencode
```

## Générer le qr-code

```
qrencode -t png "chp1" -o chp1.png
qrencode -t png "chpt" -o chpt.png
qrencode -t svg "chpt" -o chpt.svg
```
