# aframe-workshop
Proiect RA @ IARA 2024

Proof of concept orar virtual prin utilizarea tehnologiilor de realitate augmentata.

Proiectul se bazeaza pe libraria A-Frame pentru JavaScript.

Am plecat de la articolul [acesta](https://aframe.io/blog/arjs/?authuser=1) in care se prezenta modul in care se pot utiliza marker-ele de tip cod de bare pentru a reda continut virtual peste imaginea primita de camera dispozitivului mobil la citirea unui astfel de marker.

Am adaptat exemplul din articol construind un orar virtual dinamic care se afiseaza peste acel cod de bare ca si cum ar fi o foaie virtuala. Orarul este realizat din elemente virtuale specifice librariei: a-box, a-text, a-plane. Acestea sunt modelate pentru a crea iluzia unei foi virtuale de hartie peste care apare informatia.

Fiind vorba, totusi, despre continut digital si a imbunatati experienta oferita de o simpla foaie de hartie am adaugat si posibilitatea de a naviga la un link web cu detalii despre fiecare disciplina. De asemenea culoarea materiilor se schimba in mod dinamic. Activitatea curenta este redata cu rosu iar celelalte cu gri.

Am folosit un server node pentru a servi codul javascript si html.

Pentru rularea server-ului se foloseste `npm start` dupa instalarea pachetelor cu `npm i`.
Pentru conectarea la ip-ul privat al serverului am folosit Tailscale pentru a aduce dispozitivul mobil si serverul in aceeasi retea. Un IP public sau orice alta varianta de comunicatie intre client si server este posibila.