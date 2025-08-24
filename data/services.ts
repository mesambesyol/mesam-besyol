
import React from 'react';
import { Service } from '../types';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  ToothIcon, 
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  HeartIcon,
  FaceSmileIcon,
  CheckCircleIcon
} from '../constants/icons';

export const SERVICES_DATA: Service[] = [
  {
    id: 'gulus-tasarimi',
    name: { tr: 'Gülüş Tasarımı', en: 'Smile Design', de: 'Lächel Design' },
    category: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: { 
      tr: 'Yüz hatlarınıza ve beklentilerinize en uygun, estetik ve doğal gülüşü dijital teknolojilerle tasarlıyoruz.',
      en: 'We design the most aesthetic and natural smile suitable for your facial features and expectations using digital technologies.',
      de: 'Wir gestalten das ästhetischste und natürlichste Lächeln, das zu Ihren Gesichtszügen und Erwartungen passt, mit digitalen Technologien.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Gülüş Tasarımı Nedir?</h2>
        <p class="mb-4">Gülüş tasarımı, sadece beyaz dişlerden daha fazlasını ifade eden, estetik diş hekimliğinin sanatsal ve bilimsel bir birleşimidir. Amacı; dişler, diş etleri, dudaklar ve yüz hatları arasında tam bir harmoni yaratarak kişiye özel, doğal ve estetik açıdan en çekici gülüşü yaratmaktır. Kliniğimizde, gelişmiş dijital teknolojiler kullanarak tedavi sonucunu daha en başından size gösteriyor, beklentilerinizi tam olarak karşılayacak bir planlama yapıyoruz.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kimler İçin Uygundur?</h3>
        <p class="mb-4">Gülüş tasarımı, gülüşünden estetik olarak memnun olmayan hemen herkes için uygun bir çözümdür. Özellikle aşağıdaki durumlarda etkili sonuçlar alınır:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Dişlerinin renginden, şeklinden veya boyutundan memnun olmayanlar.</li>
          <li>Dişleri arasında rahatsız edici boşluklar (diastema) bulunanlar.</li>
          <li>Hafif çapraşık veya dönük dişlere sahip olanlar.</li>
          <li>Kırık, aşınmış veya yıpranmış dişleri olanlar.</li>
          <li>Gülümserken diş etleri çok fazla görünenler (gummy smile).</li>
          <li>Eski ve estetik olmayan dolgu veya kaplamalara sahip olanlar.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Tedavi Süreci Adım Adım Nasıl İşler?</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analiz ve Planlama:</strong> İlk muayenede diş hekimimiz beklentilerinizi dinler. Yüzünüzün, çene yapınızın ve dişlerinizin detaylı fotoğrafları ve dijital ölçüleri alınır.</li>
          <li><strong>Dijital Tasarım:</strong> Bu verilerle bilgisayar ortamında size özel bir gülüş tasarlanır. Bu aşamada, tedavi sonrası gülüşünüzün nasıl görüneceğini gösteren bir simülasyon (mock-up) hazırlanır ve onayınıza sunulur.</li>
          <li><strong>Hazırlık ve Uygulama:</strong> Onaylanan tasarıma göre gerekli işlemler (örneğin porselen laminalar için minimal aşındırma) yapılır ve geçici restorasyonlar takılır.</li>
          <li><strong>Kalıcı Uygulama:</strong> Laboratuvarda hazırlanan porselen laminalar, zirkonyum kaplamalar veya diğer restorasyonlar dişlerinize özel yapıştırıcılarla kalıcı olarak uygulanır.</li>
          <li><strong>Son Kontrol:</strong> Tedavinin sonunda son kontroller yapılır ve size yeni, göz alıcı gülüşünüzle ilgili bakım talimatları verilir.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Avantajları Nelerdir?</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Kişiye Özeldir:</strong> Her tasarım, kişinin kendi yüz hatlarına ve estetik algısına göre özel olarak planlanır.</li>
          <li><strong>Doğal Görünüm:</strong> Kullanılan modern materyaller (zirkonyum, e-max) doğal dişin ışık geçirgenliğini ve görünümünü mükemmel bir şekilde taklit eder.</li>
          <li><strong>Özgüven Artışı:</strong> Estetik ve çekici bir gülüş, sosyal ve profesyonel hayatta pozitif bir etki yaratarak özgüveni artırır.</li>
          <li><strong>Öngörülebilir Sonuçlar:</strong> Dijital tasarım sayesinde tedavi sonucunu baştan görerek sürprizlerle karşılaşmazsınız.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Gülüş tasarımı ne kadar sürer?</summary>
            <div class="faq-answer"><p>Süreç, yapılacak işlemlere göre değişmekle birlikte, genellikle 2-4 seans arasında, yaklaşık 1-2 hafta içinde tamamlanır.</p></div>
        </details>
        <details class="faq-item">
            <summary>Tasarımı önceden görebilir miyim?</summary>
            <div class="faq-answer"><p>Evet, dijital gülüş tasarımı teknolojisi sayesinde tedaviye başlamadan önce bilgisayar ortamında veya ağzınıza uygulanan geçici bir modelle (mock-up) sonucun nasıl olacağını görebilirsiniz.</p></div>
        </details>
        <details class="faq-item">
            <summary>Porselen laminalar veya zirkonyumlar zamanla renk değiştirir mi?</summary>
            <div class="faq-answer"><p>Hayır. Yüksek kaliteli porselen ve zirkonyum materyalleri, çay, kahve gibi renklendiricilere karşı oldukça dirençlidir ve doğru bakımla renklerini yıllarca korurlar.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Smile Design?</h2>
        <p class="mb-4">Smile design is more than just white teeth; it's an artistic and scientific blend of aesthetic dentistry. Its purpose is to create a personalized, natural, and aesthetically pleasing smile by creating perfect harmony between the teeth, gums, lips, and facial features. In our clinic, we use advanced digital technologies to show you the treatment result from the very beginning, ensuring a plan that meets your expectations precisely.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Who Is It For?</h3>
        <p class="mb-4">Smile design is a suitable solution for almost anyone who is aesthetically dissatisfied with their smile. Effective results are especially achieved in the following cases:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Those dissatisfied with the color, shape, or size of their teeth.</li>
          <li>Those with noticeable gaps (diastema) between their teeth.</li>
          <li>Those with slightly crooked or rotated teeth.</li>
          <li>Those with broken, worn, or chipped teeth.</li>
          <li>Those who show too much of their gums when they smile (gummy smile).</li>
          <li>Those with old and unaesthetic fillings or crowns.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Step-by-Step Treatment Process</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analysis and Planning:</strong> In the first examination, our dentist listens to your expectations. Detailed photos and digital impressions of your face, jaw structure, and teeth are taken.</li>
          <li><strong>Digital Design:</strong> A custom smile is designed for you in a computer environment using this data. At this stage, a simulation (mock-up) showing what your post-treatment smile will look like is prepared and presented for your approval.</li>
          <li><strong>Preparation and Application:</strong> According to the approved design, necessary procedures (e.g., minimal tooth preparation for porcelain veneers) are performed, and temporary restorations are placed.</li>
          <li><strong>Permanent Application:</strong> Porcelain veneers, zirconium crowns, or other restorations prepared in the laboratory are permanently bonded to your teeth with special adhesives.</li>
          <li><strong>Final Check-up:</strong> At the end of the treatment, final checks are made, and you are given care instructions for your new, stunning smile.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">What are the Advantages?</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Personalized:</strong> Each design is specially planned according to the person's own facial features and aesthetic perception.</li>
          <li><strong>Natural Appearance:</strong> Modern materials used (zirconium, e-max) perfectly mimic the light transmittance and appearance of natural teeth.</li>
          <li><strong>Increased Self-Confidence:</strong> An aesthetic and attractive smile creates a positive impact in social and professional life, boosting self-confidence.</li>
          <li><strong>Predictable Results:</strong> Thanks to digital design, you see the result from the beginning and avoid surprises.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>How long does smile design take?</summary>
            <div class="faq-answer"><p>The process varies depending on the procedures to be performed, but it is generally completed within 2-4 sessions, over approximately 1-2 weeks.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can I see the design beforehand?</summary>
            <div class="faq-answer"><p>Yes, thanks to digital smile design technology, you can see what the result will be in a computer environment or with a temporary model (mock-up) applied to your mouth before starting the treatment.</p></div>
        </details>
        <details class="faq-item">
            <summary>Do porcelain veneers or zirconium crowns change color over time?</summary>
            <div class="faq-answer"><p>No. High-quality porcelain and zirconium materials are highly resistant to staining from things like tea and coffee, and they maintain their color for years with proper care.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Lächel-Design?</h2>
        <p class="mb-4">Lächel-Design ist mehr als nur weiße Zähne; es ist eine künstlerische und wissenschaftliche Mischung aus ästhetischer Zahnheilkunde. Sein Zweck ist es, ein personalisiertes, natürliches und ästhetisch ansprechendes Lächeln zu schaffen, indem eine perfekte Harmonie zwischen Zähnen, Zahnfleisch, Lippen und Gesichtszügen hergestellt wird. In unserer Klinik verwenden wir fortschrittliche digitale Technologien, um Ihnen das Behandlungsergebnis von Anfang an zu zeigen und einen Plan zu gewährleisten, der Ihre Erwartungen genau erfüllt.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Für wen ist es geeignet?</h3>
        <p class="mb-4">Lächel-Design ist eine geeignete Lösung für fast jeden, der mit seinem Lächeln ästhetisch unzufrieden ist. Effektive Ergebnisse werden insbesondere in folgenden Fällen erzielt:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Die mit der Farbe, Form oder Größe ihrer Zähne unzufrieden sind.</li>
          <li>Die merkliche Lücken (Diastema) zwischen ihren Zähnen haben.</li>
          <li>Die leicht schiefe oder gedrehte Zähne haben.</li>
          <li>Die gebrochene, abgenutzte oder abgesplitterte Zähne haben.</li>
          <li>Die beim Lächeln zu viel von ihrem Zahnfleisch zeigen (Gummy Smile).</li>
          <li>Die alte und unästhetische Füllungen oder Kronen haben.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Schritt-für-Schritt-Behandlungsprozess</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analyse und Planung:</strong> Bei der ersten Untersuchung hört unser Zahnarzt auf Ihre Erwartungen. Detaillierte Fotos und digitale Abdrücke von Ihrem Gesicht, Ihrer Kieferstruktur und Ihren Zähnen werden gemacht.</li>
          <li><strong>Digitales Design:</strong> Mit diesen Daten wird ein individuelles Lächeln für Sie in einer Computerumgebung entworfen. In dieser Phase wird eine Simulation (Mock-up) erstellt, die zeigt, wie Ihr Lächeln nach der Behandlung aussehen wird, und zur Genehmigung vorgelegt.</li>
          <li><strong>Vorbereitung und Anwendung:</strong> Gemäß dem genehmigten Design werden die notwendigen Verfahren (z. B. minimale Zahnpräparation für Porzellan-Veneers) durchgeführt und provisorische Restaurationen eingesetzt.</li>
          <li><strong>Dauerhafte Anwendung:</strong> Im Labor hergestellte Porzellan-Veneers, Zirkonkronen oder andere Restaurationen werden mit speziellen Klebstoffen dauerhaft an Ihren Zähnen befestigt.</li>
          <li><strong>Abschlusskontrolle:</strong> Am Ende der Behandlung werden letzte Überprüfungen vorgenommen, und Sie erhalten Pflegehinweise für Ihr neues, atemberaubendes Lächeln.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Was sind die Vorteile?</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Personalisiert:</strong> Jedes Design wird speziell nach den Gesichtszügen und der ästhetischen Wahrnehmung der Person geplant.</li>
          <li><strong>Natürliches Aussehen:</strong> Verwendete moderne Materialien (Zirkon, E-max) ahmen die Lichtdurchlässigkeit und das Aussehen natürlicher Zähne perfekt nach.</li>
          <li><strong>Gesteigertes Selbstvertrauen:</strong> Ein ästhetisches und attraktives Lächeln schafft eine positive Wirkung im sozialen und beruflichen Leben und stärkt das Selbstvertrauen.</li>
          <li><strong>Vorhersagbare Ergebnisse:</strong> Dank des digitalen Designs sehen Sie das Ergebnis von Anfang an und vermeiden Überraschungen.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Wie lange dauert ein Lächel-Design?</summary>
            <div class="faq-answer"><p>Der Prozess variiert je nach den durchzuführenden Verfahren, wird aber in der Regel innerhalb von 2-4 Sitzungen über etwa 1-2 Wochen abgeschlossen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann ich das Design vorher sehen?</summary>
            <div class="faq-answer"><p>Ja, dank der digitalen Lächel-Design-Technologie können Sie vor Beginn der Behandlung in einer Computerumgebung oder mit einem auf Ihren Mund aufgetragenen provisorischen Modell (Mock-up) sehen, wie das Ergebnis aussehen wird.</p></div>
        </details>
        <details class="faq-item">
            <summary>Verfärben sich Porzellan-Veneers oder Zirkonkronen im Laufe der Zeit?</summary>
            <div class="faq-answer"><p>Nein. Hochwertige Porzellan- und Zirkonmaterialien sind sehr widerstandsfähig gegen Verfärbungen durch Dinge wie Tee und Kaffee und behalten bei richtiger Pflege jahrelang ihre Farbe.</p></div>
        </details>`
    },
    icon: React.createElement(SparklesIcon),
    imageUrl: 'https://i.imgur.com/zXyZdEH.jpg',
    relatedDoctorIds: ['dt-seher-kocabas', 'dt-furkan-akyildiz'],
  },
  {
    id: 'implantoloji-cene-cerrahisi',
    name: { tr: 'İmplantoloji / Çene Cerrahisi', en: 'Implantology / Jaw Surgery', de: 'Implantologie / Kieferchirurgie' },
    category: { tr: 'Cerrahi ve Restoratif Tedaviler', en: 'Surgical and Restorative Treatments', de: 'Chirurgische und restaurative Behandlungen' },
    description: {
      tr: 'Eksik dişleriniz için doğal dişe en yakın, kalıcı ve güvenilir çözümler sunan implant tedavileri ve cerrahi operasyonlar.',
      en: 'Implant treatments and surgical operations offering permanent and reliable solutions for your missing teeth, closest to natural teeth.',
      de: 'Implantatbehandlungen und chirurgische Eingriffe, die dauerhafte und zuverlässige Lösungen für Ihre fehlenden Zähne bieten, die den natürlichen Zähnen am nächsten kommen.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">İmplantoloji Nedir?</h2>
        <p class="mb-4">İmplantoloji, çeşitli nedenlerle kaybedilmiş dişlerin yerine çene kemiğine yerleştirilen, titanyumdan yapılmış yapay diş kökleri (diş implantları) kullanarak fonksiyon ve estetiğin yeniden kazandırılmasıdır. Diş implantları, üzerine yerleştirilecek olan kuron (kaplama), köprü veya protezler için sağlam bir temel oluşturur. Bu yöntem, doğal dişe en yakın alternatif olarak kabul edilir ve doğru bakımla ömür boyu kullanılabilir.</p>
        <p class="mb-4">Çene cerrahisi ise gömülü 20 yaş diş çekimleri, kist operasyonları, kemik yetersizliklerinin giderilmesi (kemik greftleme) ve sinüs lifting gibi daha kapsamlı cerrahi işlemleri içerir.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kimler İçin Uygundur?</h3>
        <p class="mb-4">Genel sağlık durumu iyi olan ve çene kemiği yapısı implant yerleşimine uygun olan herkese implant tedavisi uygulanabilir. Tedavi için uygun adaylar şunlardır:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Tek dişini, birden fazla dişini veya tüm dişlerini kaybetmiş olanlar.</li>
          <li>Hareketli protez kullanmakta zorlanan veya kullanmak istemeyenler.</li>
          <li>Çiğneme ve konuşma fonksiyonlarını tam olarak geri kazanmak isteyenler.</li>
          <li>Eksik diş boşluğunun yanındaki sağlıklı dişlere dokunulmasını istemeyenler (köprüye alternatif olarak).</li>
          <li>Yeterli çene kemiği hacmine sahip olanlar veya kemik greftleme ile kemik hacmi artırılabilecek olanlar.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Tedavi Süreci Adım Adım Nasıl İşler?</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Muayene ve Planlama:</strong> İlk adım, detaylı bir klinik ve radyografik muayenedir. 3D dental tomografi (CBCT) ile çene kemiğinizin durumu, hacmi ve kalitesi detaylıca incelenir. Bu sayede implantların konumu, boyutu ve açısı hassas bir şekilde planlanır.</li>
          <li><strong>Cerrahi Aşama:</strong> Lokal anestezi altında, işlem yapılacak bölge tamamen uyuşturulur. Diş etinde küçük bir kesi yapılarak çene kemiğinde implant için bir yuva hazırlanır ve titanyum implant bu yuvaya yerleştirilir. İşlem genellikle ağrısızdır ve implant başına yaklaşık 15-30 dakika sürer.</li>
          <li><strong>İyileşme (Osseointegrasyon):</strong> İmplantın çene kemiği ile biyolojik olarak kaynaşması için beklenir. Bu süreç, tedavinin başarısı için kritiktir ve genellikle alt çenede 2-3 ay, üst çenede ise 3-6 ay sürer. Bu dönemde hastanın estetik ve fonksiyonel ihtiyaçları için geçici protezler yapılabilir.</li>
          <li><strong>Protez Aşaması:</strong> İyileşme tamamlandıktan sonra, implantın üzerine diş etini şekillendirecek bir parça (iyileşme başlığı) takılır. Birkaç hafta sonra ölçü alınarak üzerine gelecek olan kalıcı porselen veya zirkonyum diş (kuron) hazırlanır ve implant üzerine vidalanarak veya yapıştırılarak sabitlenir.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">İmplant Tedavisinin Avantajları</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Doğal Dişe En Yakın Çözüm:</strong> Hem görünüm hem de fonksiyon olarak doğal diş hissi verir.</li>
          <li><strong>Koruyucu Yaklaşım:</strong> Köprü protezlerinden farklı olarak, komşu sağlıklı dişlerin kesilmesine gerek kalmaz.</li>
          <li><strong>Uzun Ömürlü ve Dayanıklı:</strong> İyi bir ağız bakımı ile ömür boyu sorunsuz kullanılabilirler. Başarı oranı %98'in üzerindedir.</li>
          <li><strong>Çene Kemiğini Korur:</strong> Diş eksikliğinde zamanla eriyen çene kemiğini, üzerine gelen çiğneme kuvvetlerini ileterek korur ve kemik kaybını önler.</li>
          <li><strong>Yüksek Konfor ve Özgüven:</strong> Sabit oldukları için hareketli protezler gibi takıp çıkarma derdi veya damak vurması gibi sorunlar yaşanmaz. Yemek yerken, konuşurken ve gülerken tam bir özgüven sağlar.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>İmplant tedavisi ağrılı mıdır?</summary>
            <div class="faq-answer"><p>Hayır. İşlem lokal anestezi altında yapıldığı için tamamen ağrısızdır. İşlem sonrası oluşabilecek hafif ağrılar ise hekiminizin önereceği ağrı kesicilerle kolayca kontrol altına alınır. Hastalarımız genellikle ertesi gün normal yaşantılarına dönebilirler.</p></div>
        </details>
        <details class="faq-item">
            <summary>İmplantların ömrü ne kadardır?</summary>
            <div class="faq-answer"><p>Diş implantları, doğru bir şekilde uygulandığında ve hasta tarafından iyi bir ağız bakımı yapıldığında ömür boyu dayanabilen bir tedavidir. Kendi dişleriniz gibi düzenli bakım ve hekim kontrolü gerektirirler.</p></div>
        </details>
        <details class="faq-item">
            <summary>Herkes implant yaptırabilir mi?</summary>
            <div class="faq-answer"><p>Kontrol altında olmayan sistemik hastalıkları (şeker hastalığı gibi) olanlar veya yoğun sigara içenler gibi bazı risk grupları dışında, genel sağlık durumu iyi olan çoğu yetişkin için implant uygun bir seçenektir. Kemik yoğunluğunun yetersiz olduğu durumlarda ise kemik tozu (greft) uygulamaları ile kemik hacmi artırılarak implant yapılabilir.</p></div>
        </details>
         <details class="faq-item">
            <summary>İmplantın markası önemli midir?</summary>
            <div class="faq-answer"><p>Evet, önemlidir. Kliniğimizde, uzun yıllardır başarısı kanıtlanmış, bilimsel çalışmaları ve Ar-Ge geçmişi olan, uluslararası standartlara sahip implant markaları kullanılmaktadır. Bu, tedavinin uzun dönem başarısı ve güvenirliği açısından kritik bir faktördür.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Implantology?</h2>
        <p class="mb-4">Implantology is the restoration of function and aesthetics by using artificial tooth roots (dental implants) made of titanium, which are placed in the jawbone to replace missing teeth for various reasons. Dental implants provide a solid foundation for crowns, bridges, or dentures. This method is considered the closest alternative to a natural tooth and can be used for a lifetime with proper care.</p>
        <p class="mb-4">Jaw surgery, on the other hand, includes more comprehensive surgical procedures such as impacted wisdom tooth extractions, cyst operations, correction of bone deficiencies (bone grafting), and sinus lifting.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Who Is It For?</h3>
        <p class="mb-4">Implant treatment can be applied to anyone with good general health and a jawbone structure suitable for implant placement. Suitable candidates for the treatment include:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Those who have lost a single tooth, multiple teeth, or all their teeth.</li>
          <li>Those who have difficulty with or do not want to use removable dentures.</li>
          <li>Those who want to fully regain their chewing and speaking functions.</li>
          <li>Those who do not want the healthy teeth next to the missing tooth gap to be touched (as an alternative to a bridge).</li>
          <li>Those with sufficient jawbone volume or those whose bone volume can be increased with bone grafting.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Step-by-Step Treatment Process</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Examination and Planning:</strong> The first step is a detailed clinical and radiographic examination. The condition, volume, and quality of your jawbone are examined in detail with 3D dental tomography (CBCT). This allows for precise planning of the position, size, and angle of the implants.</li>
          <li><strong>Surgical Phase:</strong> Under local anesthesia, the area to be treated is completely numbed. A small incision is made in the gum, a socket is prepared in the jawbone for the implant, and the titanium implant is placed in this socket. The procedure is generally painless and takes about 15-30 minutes per implant.</li>
          <li><strong>Healing (Osseointegration):</strong> A waiting period is required for the implant to biologically fuse with the jawbone. This process is critical for the success of the treatment and usually takes 2-3 months for the lower jaw and 3-6 months for the upper jaw. Temporary prostheses can be made for the patient's aesthetic and functional needs during this period.</li>
          <li><strong>Prosthetic Phase:</strong> After healing is complete, a piece (healing abutment) is attached to the implant to shape the gum. After a few weeks, an impression is taken to prepare the permanent porcelain or zirconium tooth (crown), which is then fixed to the implant by screwing or cementing.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Advantages of Implant Treatment</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Closest Solution to Natural Teeth:</strong> Provides the feel of a natural tooth in both appearance and function.</li>
          <li><strong>Conservative Approach:</strong> Unlike bridges, there is no need to cut adjacent healthy teeth.</li>
          <li><strong>Long-lasting and Durable:</strong> They can be used for a lifetime with good oral care. The success rate is over 98%.</li>
          <li><strong>Preserves Jawbone:</strong> It protects the jawbone, which resorbs over time in case of tooth loss, by transmitting the chewing forces, thus preventing bone loss.</li>
          <li><strong>High Comfort and Self-Confidence:</strong> Since they are fixed, there are no problems like the hassle of removing and inserting dentures or gum soreness. Provides complete confidence when eating, speaking, and smiling.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Is implant treatment painful?</summary>
            <div class="faq-answer"><p>No. The procedure is completely painless as it is performed under local anesthesia. Any mild pain that may occur after the procedure can be easily controlled with painkillers prescribed by your dentist. Our patients can usually return to their normal lives the next day.</p></div>
        </details>
        <details class="faq-item">
            <summary>What is the lifespan of implants?</summary>
            <div class="faq-answer"><p>Dental implants are a lifelong treatment when applied correctly and maintained with good oral care by the patient. They require regular maintenance and check-ups just like your own teeth.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can anyone get implants?</summary>
            <div class="faq-answer"><p>Except for some risk groups such as those with uncontrolled systemic diseases (like diabetes) or heavy smokers, implants are a suitable option for most adults with good general health. In cases of insufficient bone density, implants can be placed after increasing the bone volume with bone grafting procedures.</p></div>
        </details>
        <details class="faq-item">
            <summary>Is the brand of the implant important?</summary>
            <div class="faq-answer"><p>Yes, it is important. In our clinic, we use implant brands with proven long-term success, scientific studies, and R&D history, which meet international standards. This is a critical factor for the long-term success and reliability of the treatment.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Implantologie?</h2>
        <p class="mb-4">Die Implantologie ist die Wiederherstellung von Funktion und Ästhetik durch den Einsatz künstlicher Zahnwurzeln (Zahnimplantate) aus Titan, die aus verschiedenen Gründen in den Kieferknochen eingesetzt werden, um fehlende Zähne zu ersetzen. Zahnimplantate bieten eine solide Grundlage für Kronen, Brücken oder Prothesen. Diese Methode gilt als die naturnächste Alternative zu einem echten Zahn und kann bei richtiger Pflege ein Leben lang halten.</p>
        <p class="mb-4">Die Kieferchirurgie hingegen umfasst umfassendere chirurgische Eingriffe wie die Extraktion impaktierter Weisheitszähne, Zystenoperationen, die Korrektur von Knochendefiziten (Knochenaufbau) und den Sinuslift.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Für wen ist es geeignet?</h3>
        <p class="mb-4">Eine Implantatbehandlung kann bei jedem mit guter Allgemeingesundheit und einer für die Implantatplatzierung geeigneten Kieferknochenstruktur durchgeführt werden. Geeignete Kandidaten für die Behandlung sind:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Personen, die einen einzelnen Zahn, mehrere Zähne oder alle Zähne verloren haben.</li>
          <li>Personen, die Schwierigkeiten mit herausnehmbaren Prothesen haben oder diese nicht verwenden möchten.</li>
          <li>Personen, die ihre Kau- und Sprechfunktionen vollständig wiedererlangen möchten.</li>
          <li>Personen, die nicht möchten, dass die gesunden Zähne neben der Zahnlücke berührt werden (als Alternative zu einer Brücke).</li>
          <li>Personen mit ausreichendem Kieferknochenvolumen oder Personen, deren Knochenvolumen durch Knochenaufbau erhöht werden kann.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Schritt-für-Schritt-Behandlungsprozess</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Untersuchung und Planung:</strong> Der erste Schritt ist eine detaillierte klinische und radiographische Untersuchung. Zustand, Volumen und Qualität Ihres Kieferknochens werden mit 3D-Dental-Tomographie (DVT) detailliert untersucht. Dies ermöglicht eine präzise Planung von Position, Größe und Winkel der Implantate.</li>
          <li><strong>Chirurgische Phase:</strong> Unter örtlicher Betäubung wird der zu behandelnde Bereich vollständig betäubt. Ein kleiner Schnitt im Zahnfleisch wird gemacht, ein Bett für das Implantat im Kieferknochen vorbereitet und das Titanimplantat in dieses Bett eingesetzt. Der Eingriff ist im Allgemeinen schmerzfrei und dauert pro Implantat etwa 15-30 Minuten.</li>
          <li><strong>Heilung (Osseointegration):</strong> Eine Wartezeit ist erforderlich, damit das Implantat biologisch mit dem Kieferknochen verwachsen kann. Dieser Prozess ist entscheidend für den Erfolg der Behandlung und dauert in der Regel 2-3 Monate für den Unterkiefer und 3-6 Monate für den Oberkiefer. Während dieser Zeit können für die ästhetischen und funktionellen Bedürfnisse des Patienten provisorische Prothesen angefertigt werden.</li>
          <li><strong>Prothetische Phase:</strong> Nach Abschluss der Heilung wird ein Teil (Heilungskappe) auf das Implantat aufgesetzt, um das Zahnfleisch zu formen. Nach einigen Wochen wird ein Abdruck genommen, um den permanenten Porzellan- oder Zirkonzahn (Krone) vorzubereiten, der dann durch Schrauben oder Zementieren auf dem Implantat befestigt wird.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Vorteile der Implantatbehandlung</h3>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Die naturnächste Lösung:</strong> Bietet das Gefühl eines natürlichen Zahnes in Aussehen und Funktion.</li>
          <li><strong>Konservativer Ansatz:</strong> Im Gegensatz zu Brücken müssen benachbarte gesunde Zähne nicht beschliffen werden.</li>
          <li><strong>Langlebig und haltbar:</strong> Sie können bei guter Mundpflege ein Leben lang verwendet werden. Die Erfolgsquote liegt bei über 98%.</li>
          <li><strong>Erhält den Kieferknochen:</strong> Es schützt den Kieferknochen, der bei Zahnverlust mit der Zeit abgebaut wird, indem es die Kaukräfte überträgt und so den Knochenverlust verhindert.</li>
          <li><strong>Hoher Komfort und Selbstvertrauen:</strong> Da sie festsitzend sind, gibt es keine Probleme wie das lästige Einsetzen und Herausnehmen von Prothesen oder Zahnfleischschmerzen. Bietet volles Vertrauen beim Essen, Sprechen und Lächeln.</li>
        </ul>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Ist eine Implantatbehandlung schmerzhaft?</summary>
            <div class="faq-answer"><p>Nein. Der Eingriff ist völlig schmerzfrei, da er unter örtlicher Betäubung durchgeführt wird. Leichte Schmerzen, die nach dem Eingriff auftreten können, lassen sich mit von Ihrem Zahnarzt verschriebenen Schmerzmitteln leicht kontrollieren. Unsere Patienten können in der Regel am nächsten Tag wieder in ihr normales Leben zurückkehren.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie lange halten Implantate?</summary>
            <div class="faq-answer"><p>Zahnimplantate sind eine lebenslange Behandlung, wenn sie korrekt eingesetzt und vom Patienten gut gepflegt werden. Sie erfordern regelmäßige Pflege und Kontrollen genau wie Ihre eigenen Zähne.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann jeder Implantate bekommen?</summary>
            <div class="faq-answer"><p>Außer bei einigen Risikogruppen wie Personen mit unkontrollierten systemischen Erkrankungen (wie Diabetes) oder starken Rauchern sind Implantate für die meisten Erwachsenen mit guter Allgemeingesundheit eine geeignete Option. In Fällen unzureichender Knochendichte können Implantate nach einer Erhöhung des Knochenvolumens durch Knochenaufbauverfahren eingesetzt werden.</p></div>
        </details>
        <details class="faq-item">
            <summary>Ist die Marke des Implantats wichtig?</summary>
            <div class="faq-answer"><p>Ja, das ist wichtig. In unserer Klinik verwenden wir Implantatmarken mit nachgewiesenem Langzeiterfolg, wissenschaftlichen Studien und F&E-Hintergrund, die internationalen Standards entsprechen. Dies ist ein entscheidender Faktor für den langfristigen Erfolg und die Zuverlässigkeit der Behandlung.</p></div>
        </details>`
    },
    icon: React.createElement(ShieldCheckIcon),
    imageUrl: 'https://i.imgur.com/vX6QMpE.jpg',
    relatedDoctorIds: ['dt-burak-senol', 'dt-seher-kocabas'],
  },
  {
    id: 'estetik-dis-hekimligi',
    name: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    category: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: {
      tr: 'Gülüşünüzü sanata dönüştüren uygulamalarla tanışın: Diş beyazlatma, porselen laminalar, bonding ve daha fazlası.',
      en: 'Discover the applications that turn your smile into a work of art: teeth whitening, porcelain laminates, bonding, and more.',
      de: 'Entdecken Sie die Anwendungen, die Ihr Lächeln in ein Kunstwerk verwandeln: Zahnaufhellung, Porzellanlaminate, Bonding und mehr.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Estetik Diş Hekimliği Nedir?</h2>
        <p class="mb-4">Estetik diş hekimliği, sadece ağız ve diş sağlığını korumakla kalmaz, aynı zamanda dişlerin ve gülüşün estetik görünümünü iyileştirmeyi hedefler. Dişlerin rengi, şekli, boyutu, dizilimi ve diş etleriyle olan uyumunu bir bütün olarak ele alarak, kişiye özel, doğal ve çekici bir gülümseme yaratır. Bu, fonksiyon ve estetiğin mükemmel bir birleşimidir.</p>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sunduğumuz Estetik Çözümler</h3>
        <p class="mb-4">Kliniğimizde, gülüşünüzü mükemmelleştirmek için çeşitli estetik tedavi seçenekleri sunuyoruz:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Diş Beyazlatma (Bleaching):</strong> Klinik ortamında (ofis tipi) veya evde (ev tipi) uygulanan güvenli yöntemlerle dişlerinizin rengini açarak daha parlak ve canlı bir gülüş elde etmenizi sağlar.</li>
            <li><strong>Porselen Laminalar (Veneers):</strong> Dişlerin ön yüzeyine yapıştırılan ince porselen yaprakçıklar ile renklenmeler, aralıklar, hafif çapraşıklıklar ve şekil bozuklukları minimal bir müdahale ile mükemmel bir şekilde düzeltilir.</li>
            <li><strong>Bonding (Kompozit Lamina):</strong> Diş rengindeki kompozit materyallerle küçük estetik kusurların (küçük kırıklar, aralıklar, şekil bozuklukları) genellikle tek seansta, dişe zarar vermeden düzeltilmesi işlemidir.</li>
            <li><strong>Zirkonyum ve E-max Kronlar:</strong> Metal içermeyen, yüksek ışık geçirgenliğine sahip bu kaplamalar, doğal diş görünümünü birebir taklit ederek hem estetik hem de dayanıklılığı bir arada sunar.</li>
            <li><strong>Pembe Estetik (Diş Eti Estetiği):</strong> Lazer veya küçük cerrahi müdahalelerle diş eti seviyelerinin ayarlanması, "gummy smile" (gülümserken diş etlerinin fazla görünmesi) gibi durumların düzeltilmesiyle ideal diş-diş eti uyumu sağlanır.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Avantajları Nelerdir?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Özgüven Artışı:</strong> Güzel bir gülüş, sosyal ve profesyonel hayatta kendinizi daha iyi hissetmenizi sağlar.</li>
            <li><strong>Doğal ve Kalıcı Sonuçlar:</strong> Modern materyaller ve teknikler sayesinde doğal dişten ayırt edilemeyen, uzun ömürlü sonuçlar elde edilir.</li>
            <li><strong>Koruyucu Yaklaşım:</strong> Birçok estetik işlemde (lamina, bonding gibi) diş dokusuna minimum müdahalede bulunulur.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Estetik işlemler ağrılı mıdır?</summary>
            <div class="faq-answer"><p>Hayır. Tüm estetik işlemler lokal anestezi altında veya anestezi gerektirmeyen konforlu prosedürlerdir. Tedavi sırasında veya sonrasında ciddi bir ağrı beklenmez.</p></div>
        </details>
        <details class="faq-item">
            <summary>Estetik bir gülüşe ne kadar sürede sahip olabilirim?</summary>
            <div class="faq-answer"><p>Bu, yapılacak işleme bağlıdır. Diş beyazlatma veya bonding gibi işlemler tek seansta tamamlanabilirken, porselen laminalar veya zirkonyum kaplamalar genellikle 1-2 hafta içinde birkaç seansta tamamlanır.</p></div>
        </details>
        `,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Aesthetic Dentistry?</h2>
        <p class="mb-4">Aesthetic dentistry not only maintains oral and dental health but also aims to improve the aesthetic appearance of the teeth and smile. It creates a personalized, natural, and attractive smile by considering the color, shape, size, alignment of the teeth, and their harmony with the gums as a whole. It is the perfect combination of function and aesthetics.</p>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Our Aesthetic Solutions</h3>
        <p class="mb-4">At our clinic, we offer various aesthetic treatment options to perfect your smile:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Teeth Whitening (Bleaching):</strong> Allows you to achieve a brighter and more vibrant smile by whitening your teeth with safe methods applied in the clinic (office-type) or at home (home-type).</li>
            <li><strong>Porcelain Laminates (Veneers):</strong> Thin porcelain shells bonded to the front surfaces of the teeth perfectly correct discolorations, gaps, minor misalignments, and shape irregularities with minimal intervention.</li>
            <li><strong>Bonding (Composite Laminate):</strong> The process of correcting minor aesthetic flaws (small fractures, gaps, shape irregularities) with tooth-colored composite materials, usually in a single session without damaging the tooth.</li>
            <li><strong>Zirconium and E-max Crowns:</strong> These metal-free crowns with high light transmittance offer both aesthetics and durability by perfectly mimicking the appearance of natural teeth.</li>
            <li><strong>Pink Aesthetics (Gum Aesthetics):</strong> Ideal tooth-gum harmony is achieved by adjusting gum levels with lasers or minor surgical interventions, correcting conditions like "gummy smile" (excessive gum display when smiling).</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">What are the Advantages?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Increased Self-Confidence:</strong> A beautiful smile makes you feel better in your social and professional life.</li>
            <li><strong>Natural and Lasting Results:</strong> Thanks to modern materials and techniques, long-lasting results that are indistinguishable from natural teeth are achieved.</li>
            <li><strong>Conservative Approach:</strong> Many aesthetic procedures (like veneers, bonding) involve minimal intervention to the tooth structure.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Are aesthetic procedures painful?</summary>
            <div class="faq-answer"><p>No. All aesthetic procedures are comfortable and are performed under local anesthesia or require no anesthesia at all. No significant pain is expected during or after the treatment.</p></div>
        </details>
        <details class="faq-item">
            <summary>How long does it take to get an aesthetic smile?</summary>
            <div class="faq-answer"><p>This depends on the procedure. Procedures like teeth whitening or bonding can be completed in a single session, while porcelain veneers or zirconium crowns are usually completed in a few sessions within 1-2 weeks.</p></div>
        </details>
        `,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist ästhetische Zahnheilkunde?</h2>
        <p class="mb-4">Die ästhetische Zahnheilkunde erhält nicht nur die Mund- und Zahngesundheit, sondern zielt auch darauf ab, das ästhetische Erscheinungsbild der Zähne und des Lächelns zu verbessern. Sie schafft ein personalisiertes, natürliches und attraktives Lächeln, indem sie Farbe, Form, Größe, Ausrichtung der Zähne und deren Harmonie mit dem Zahnfleisch als Ganzes betrachtet. Es ist die perfekte Kombination aus Funktion und Ästhetik.</p>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Unsere ästhetischen Lösungen</h3>
        <p class="mb-4">In unserer Klinik bieten wir verschiedene ästhetische Behandlungsmöglichkeiten, um Ihr Lächeln zu perfektionieren:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Zahnaufhellung (Bleaching):</strong> Ermöglicht Ihnen ein helleres und lebendigeres Lächeln durch das Aufhellen Ihrer Zähne mit sicheren Methoden, die in der Klinik (Office-Bleaching) oder zu Hause (Home-Bleaching) angewendet werden.</li>
            <li><strong>Porzellanlaminate (Veneers):</strong> Dünne Porzellanschalen, die auf die Vorderseite der Zähne geklebt werden, korrigieren Verfärbungen, Lücken, leichte Fehlstellungen und Formunregelmäßigkeiten mit minimalem Eingriff perfekt.</li>
            <li><strong>Bonding (Kompositlaminat):</strong> Das Verfahren zur Korrektur kleinerer ästhetischer Mängel (kleine Frakturen, Lücken, Formunregelmäßigkeiten) mit zahnfarbenen Kompositmaterialien, in der Regel in einer einzigen Sitzung, ohne den Zahn zu beschädigen.</li>
            <li><strong>Zirkon- und E-max-Kronen:</strong> Diese metallfreien Kronen mit hoher Lichtdurchlässigkeit bieten sowohl Ästhetik als auch Haltbarkeit, indem sie das Aussehen natürlicher Zähne perfekt nachahmen.</li>
            <li><strong>Rosa Ästhetik (Zahnfleischästhetik):</strong> Eine ideale Zahn-Zahnfleisch-Harmonie wird durch die Anpassung des Zahnfleischniveaus mit Lasern oder kleinen chirurgischen Eingriffen erreicht, wodurch Zustände wie ein "Gummy Smile" (übermäßiges Zahnfleischzeigen beim Lächeln) korrigiert werden.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Was sind die Vorteile?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Gesteigertes Selbstvertrauen:</strong> Ein schönes Lächeln lässt Sie sich in Ihrem sozialen und beruflichen Leben besser fühlen.</li>
            <li><strong>Natürliche und dauerhafte Ergebnisse:</strong> Dank moderner Materialien und Techniken werden langlebige Ergebnisse erzielt, die von natürlichen Zähnen nicht zu unterscheiden sind.</li>
            <li><strong>Konservativer Ansatz:</strong> Viele ästhetische Verfahren (wie Veneers, Bonding) erfordern nur einen minimalen Eingriff in die Zahnsubstanz.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Sind ästhetische Eingriffe schmerzhaft?</summary>
            <div class="faq-answer"><p>Nein. Alle ästhetischen Eingriffe sind komfortabel und werden unter örtlicher Betäubung durchgeführt oder erfordern gar keine Betäubung. Während oder nach der Behandlung werden keine signifikanten Schmerzen erwartet.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie lange dauert es, ein ästhetisches Lächeln zu bekommen?</summary>
            <div class="faq-answer"><p>Dies hängt vom Eingriff ab. Verfahren wie Zahnaufhellung oder Bonding können in einer einzigen Sitzung abgeschlossen werden, während Porzellan-Veneers oder Zirkonkronen in der Regel in wenigen Sitzungen innerhalb von 1-2 Wochen fertiggestellt werden.</p></div>
        </details>
        `
    },
    icon: React.createElement(FaceSmileIcon),
    imageUrl: 'https://i.imgur.com/0ILBoBD.jpg',
    relatedDoctorIds: ['dt-seher-kocabas', 'dt-furkan-akyildiz'],
  },
  {
    id: 'dijital-dis-hekimligi',
    name: { tr: 'Dijital Diş Hekimliği', en: 'Digital Dentistry', de: 'Digitale Zahnheilkunde' },
    category: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: {
      tr: 'Tedavilerde maksimum hassasiyet ve konfor sağlayan 3D tarayıcılar, CAD/CAM sistemleri ve yapay zeka teknolojileri.',
      en: '3D scanners, CAD/CAM systems, and artificial intelligence technologies that provide maximum precision and comfort in treatments.',
      de: '3D-Scanner, CAD/CAM-Systeme und künstliche Intelligenz-Technologien, die maximale Präzision und Komfort bei Behandlungen bieten.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Dijital Diş Hekimliği Nedir?</h2>
        <p class="mb-4">Dijital diş hekimliği, teşhis ve tedavi süreçlerinde geleneksel yöntemlerin yerini alan veya onları destekleyen bilgisayar destekli teknolojilerin kullanılmasıdır. Bu modern yaklaşım, hata payını en aza indirir, hasta konforunu artırır ve tedavi sürelerini önemli ölçüde kısaltır.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kliniğimizdeki Dijital Teknolojiler ve Avantajları</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
            <li><strong>Ağız İçi Tarayıcılar (3D Scanners):</strong> Geleneksel ölçü alma yöntemlerinin neden olduğu bulantı ve rahatsızlık hissini ortadan kaldıran bu cihazlar, dişlerinizin üç boyutlu dijital modelini saniyeler içinde ve mikron hassasiyetinde oluşturur. Bu, protez ve restorasyonların mükemmel uyumlu olmasını sağlar.</li>
            <li><strong>CAD/CAM Sistemleri (Bilgisayar Destekli Tasarım ve Üretim):</strong> Ağız içi tarayıcıdan alınan dijital ölçü, bilgisayar ortamına aktarılır. Burada porselen veya zirkonyum kaplama, inley/onley dolgular gibi restorasyonlar hassas bir şekilde tasarlanır. Tasarım, klinikteki özel kazıyıcı (milling) cihaza gönderilerek restorasyon aynı gün içinde üretilebilir (örn: Cerec sistemi). Bu, "tek seansta diş hekimliği" imkanı sunar.</li>
            <li><strong>Yapay Zeka (AI) Destekli Teşhis:</strong> Yapay zeka algoritmaları, röntgen görüntülerindeki başlangıç seviyesindeki çürükleri, kistleri veya diğer patolojileri insan gözünden daha hassas bir şekilde tespit ederek erken teşhise ve daha koruyucu tedavilere olanak tanır.</li>
            <li><strong>Dijital Gülüş Tasarımı:</strong> Tedaviye başlamadan önce, dijital ortamda yüzünüzün ve dişlerinizin analizini yaparak, tedavi sonrası gülüşünüzün nasıl görüneceğini size simülasyonlarla gösterebiliriz. Bu, beklentilerinizin tam olarak karşılanmasını sağlar.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Ağız içi tarama işlemi rahatsız edici midir?</summary>
            <div class="faq-answer"><p>Hayır, kesinlikle değildir. Ucu küçük bir kameraya benzeyen tarayıcı, dişlerinize temas etmeden yüzeylerinde gezdirilir. Geleneksel macunlu ölçü yöntemine göre çok daha hızlı ve konforludur.</p></div>
        </details>
        <details class="faq-item">
            <summary>Tek seansta kaplama yaptırmak mümkün mü?</summary>
            <div class="faq-answer"><p>Evet, CAD/CAM teknolojisi sayesinde, uygun vakalarda ölçü alındıktan sonra bilgisayarda tasarım yapılır ve klinikteki cihazda porselen veya zirkonyum restorasyonunuz yaklaşık 1-2 saat içinde üretilerek aynı gün içinde dişinize takılabilir.</p></div>
        </details>
        `,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Digital Dentistry?</h2>
        <p class="mb-4">Digital dentistry is the use of computer-aided technologies that replace or support traditional methods in diagnosis and treatment processes. This modern approach minimizes errors, increases patient comfort, and significantly shortens treatment times.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Digital Technologies and Their Advantages in Our Clinic</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
            <li><strong>Intraoral Scanners (3D Scanners):</strong> Eliminating the nausea and discomfort caused by traditional impression methods, these devices create a three-dimensional digital model of your teeth in seconds with micron-level precision. This ensures that prostheses and restorations have a perfect fit.</li>
            <li><strong>CAD/CAM Systems (Computer-Aided Design and Manufacturing):</strong> The digital impression taken from the intraoral scanner is transferred to the computer. Here, restorations such as porcelain or zirconium crowns, inlays/onlays are precisely designed. The design can be sent to a special milling device in the clinic to produce the restoration on the same day (e.g., Cerec system). This offers "single-session dentistry."</li>
            <li><strong>AI-Assisted Diagnosis:</strong> Artificial intelligence algorithms detect early-stage cavities, cysts, or other pathologies in X-ray images more accurately than the human eye, enabling early diagnosis and more conservative treatments.</li>
            <li><strong>Digital Smile Design:</strong> Before starting treatment, we can show you how your smile will look post-treatment through simulations by analyzing your face and teeth in a digital environment. This ensures your expectations are fully met.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Is the intraoral scanning process uncomfortable?</summary>
            <div class="faq-answer"><p>No, not at all. The scanner, which has a tip resembling a small camera, is moved over the surfaces of your teeth without touching them. It is much faster and more comfortable than the traditional putty impression method.</p></div>
        </details>
        <details class="faq-item">
            <summary>Is it possible to get a crown in a single session?</summary>
            <div class="faq-answer"><p>Yes, thanks to CAD/CAM technology, in suitable cases, your porcelain or zirconium restoration can be designed on the computer after the impression is taken and produced in the clinic's device within about 1-2 hours, and fitted to your tooth on the same day.</p></div>
        </details>
        `,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist digitale Zahnheilkunde?</h2>
        <p class="mb-4">Die digitale Zahnheilkunde ist der Einsatz von computergestützten Technologien, die traditionelle Methoden in Diagnose- und Behandlungsprozessen ersetzen oder unterstützen. Dieser moderne Ansatz minimiert Fehler, erhöht den Patientenkomfort und verkürzt die Behandlungszeiten erheblich.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Digitale Technologien und ihre Vorteile in unserer Klinik</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
            <li><strong>Intraorale Scanner (3D-Scanner):</strong> Diese Geräte, die das durch traditionelle Abformmethoden verursachte Übelkeits- und Unbehagenheitsgefühl eliminieren, erstellen in Sekundenschnelle ein dreidimensionales digitales Modell Ihrer Zähne mit mikrometergenauer Präzision. Dies stellt sicher, dass Prothesen und Restaurationen perfekt passen.</li>
            <li><strong>CAD/CAM-Systeme (Computergestütztes Design und Fertigung):</strong> Der digitale Abdruck vom Intraoralscanner wird auf den Computer übertragen. Hier werden Restaurationen wie Porzellan- oder Zirkoniumkronen, Inlays/Onlays präzise entworfen. Das Design kann an ein spezielles Fräsgerät in der Klinik gesendet werden, um die Restauration am selben Tag herzustellen (z. B. Cerec-System). Dies bietet "Zahnheilkunde in einer Sitzung".</li>
            <li><strong>KI-gestützte Diagnose:</strong> Algorithmen der künstlichen Intelligenz erkennen Karies im Frühstadium, Zysten oder andere Pathologien in Röntgenbildern genauer als das menschliche Auge, was eine frühzeitige Diagnose und konservativere Behandlungen ermöglicht.</li>
            <li><strong>Digitales Lächel-Design:</strong> Bevor mit der Behandlung begonnen wird, können wir Ihnen durch Simulationen zeigen, wie Ihr Lächeln nach der Behandlung aussehen wird, indem wir Ihr Gesicht und Ihre Zähne in einer digitalen Umgebung analysieren. Dies stellt sicher, dass Ihre Erwartungen vollständig erfüllt werden.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Ist der intraorale Scanvorgang unangenehm?</summary>
            <div class="faq-answer"><p>Nein, überhaupt nicht. Der Scanner, dessen Spitze einer kleinen Kamera ähnelt, wird über die Oberflächen Ihrer Zähne bewegt, ohne sie zu berühren. Es ist viel schneller und komfortabler als die traditionelle Abdruckmethode mit Paste.</p></div>
        </details>
        <details class="faq-item">
            <summary>Ist es möglich, eine Krone in einer einzigen Sitzung zu erhalten?</summary>
            <div class="faq-answer"><p>Ja, dank der CAD/CAM-Technologie kann in geeigneten Fällen Ihre Porzellan- oder Zirkonrestauration nach der Abdrucknahme am Computer entworfen und im Gerät der Klinik innerhalb von etwa 1-2 Stunden hergestellt und am selben Tag auf Ihren Zahn aufgesetzt werden.</p></div>
        </details>
        `
    },
    icon: React.createElement(DevicePhoneMobileIcon),
    imageUrl: 'https://i.imgur.com/ntrA30O.jpg',
    relatedDoctorIds: ['dt-hasan-sinankili'],
  },
  {
    id: 'endodonti',
    name: { tr: 'Endodonti (Kanal Tedavisi)', en: 'Endodontics (Root Canal Therapy)', de: 'Endodontie (Wurzelkanalbehandlung)' },
    category: { tr: 'Cerrahi ve Restoratif Tedaviler', en: 'Surgical and Restorative Treatments', de: 'Chirurgische und restaurative Behandlungen' },
    description: {
      tr: 'Ağrılı ve enfekte dişleri kurtarmak için uygulanan modern kanal tedavisi yöntemleriyle diş kaybını önlüyoruz.',
      en: 'We prevent tooth loss with modern root canal treatment methods applied to save painful and infected teeth.',
      de: 'Wir verhindern Zahnverlust mit modernen Wurzelkanalbehandlungsmethoden, die zur Rettung schmerzhafter und infizierter Zähne angewendet werden.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Endodonti (Kanal Tedavisi) Nedir?</h2>
        <p class="mb-4">Endodonti, dişin pulpa (sinir, kan ve lenf damarlarını içeren canlı doku) adı verilen iç kısmının hastalıkları ve yaralanmaları ile ilgilenir. Genellikle "kanal tedavisi" olarak bilinen bu işlem, derin çürükler, travmalar veya çatlaklar sonucu enfekte olmuş, iltihaplanmış veya canlılığını yitirmiş bir dişi kurtarmayı ve ağrıyı ortadan kaldırmayı amaçlar.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kanal Tedavisi Neden Gerekli Olur?</h3>
        <p class="mb-4">Dişin pulpası hasar gördüğünde, bakteriler bu bölgede çoğalır. Tedavi edilmezse, enfeksiyon kök ucuna yayılarak çene kemiğinde apseye yol açabilir. Bu durum şiddetli ağrı, şişlik, kemik kaybı ve sonuçta diş kaybıyla sonuçlanabilir. Kanal tedavisi, dişi çekilmekten kurtaran ve enfeksiyonun yayılmasını önleyen son derece başarılı bir yöntemdir.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Tedavi Süreci Adım Adım Nasıl İşler?</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Teşhis ve Anestezi:</strong> Diş hekimi, röntgen ve klinik muayene ile sorunu teşhis eder. Tedaviye başlamadan önce, işlem yapılacak diş ve çevresi lokal anestezi ile tamamen uyuşturulur, bu sayede işlem ağrısızdır.</li>
            <li><strong>İzolasyon ve Giriş:</strong> Diş, tükürük ve bakterilerden izole etmek için "rubber dam" adı verilen lastik bir örtü ile kaplanır. Ardından dişin üst kısmından pulpaya ulaşmak için bir giriş açılır.</li>
            <li><strong>Kanalların Temizlenmesi ve Şekillendirilmesi:</strong> Enfekte veya iltihaplı pulpa dokusu, özel aletler ve döner alet sistemleri kullanılarak kök kanallarından temizlenir. Kanallar dezenfektan solüsyonlarla yıkanır ve genişletilerek doldurmaya hazır hale getirilir.</li>
            <li><strong>Kanalların Doldurulması:</strong> Temizlenen ve şekillendirilen kanallar, "güta perka" adı verilen biyouyumlu bir dolgu materyali ile sızdırmaz bir şekilde doldurulur.</li>
            <li><strong>Restorasyon:</strong> Kanal tedavisi tamamlandıktan sonra, dişin üst kısmı geçici veya kalıcı dolgu ile kapatılır. Kanal tedavisi gören dişler zamanla daha kırılgan hale gelebileceğinden, dişin dayanıklılığını artırmak ve uzun ömürlü olmasını sağlamak için genellikle bir kuron (kaplama) ile restore edilmesi önerilir.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Kanal tedavisi ağrılı bir işlem midir?</summary>
            <div class="faq-answer"><p>Hayır. Modern anestezi teknikleri ve teknolojiler sayesinde kanal tedavisi tamamen ağrısız bir işlemdir. Aslında tedavi, mevcut olan şiddetli diş ağrısını ortadan kaldırmak için yapılır.</p></div>
        </details>
        <details class="faq-item">
            <summary>Tedavi kaç seans sürer?</summary>
            <div class="faq-answer"><p>Kliniğimizde kullanılan döner alet sistemleri gibi modern teknolojiler sayesinde, çoğu vaka tek seansta (yaklaşık 1-1.5 saat) başarılı bir şekilde tamamlanabilmektedir. Ancak enfeksiyonun durumuna göre bazen ikinci bir seans gerekebilir.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kanal tedavisi yapılan diş ömür boyu kullanılır mı?</summary>
            <div class="faq-answer"><p>Evet. Başarılı bir kanal tedavisi ve üzerine yapılan iyi bir restorasyon (dolgu veya kaplama) ile diş, doğru ağız bakımı yapıldığı sürece ömür boyu ağızda kalabilir. Kendi dişiniz gibi düzenli fırçalama, diş ipi kullanımı ve hekim kontrolü gerektirir.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Endodontics (Root Canal Therapy)?</h2>
        <p class="mb-4">Endodontics deals with diseases and injuries of the inner part of the tooth called the pulp (the living tissue containing nerves, blood, and lymph vessels). Commonly known as "root canal treatment," this procedure aims to save a tooth that is infected, inflamed, or has lost its vitality due to deep decay, trauma, or cracks, and to eliminate pain.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Why is Root Canal Treatment Necessary?</h3>
        <p class="mb-4">When the tooth's pulp is damaged, bacteria multiply in this area. If left untreated, the infection can spread to the root tip, leading to an abscess in the jawbone. This can result in severe pain, swelling, bone loss, and ultimately tooth loss. Root canal therapy is a highly successful method that saves the tooth from extraction and prevents the spread of infection.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Step-by-Step Treatment Process</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Diagnosis and Anesthesia:</strong> The dentist diagnoses the problem with an X-ray and clinical examination. Before starting the treatment, the tooth to be treated and its surroundings are completely numbed with local anesthesia, making the procedure painless.</li>
            <li><strong>Isolation and Access:</strong> The tooth is covered with a rubber sheet called a "rubber dam" to isolate it from saliva and bacteria. Then, an opening is made from the top of the tooth to access the pulp.</li>
            <li><strong>Cleaning and Shaping the Canals:</strong> The infected or inflamed pulp tissue is removed from the root canals using special instruments and rotary systems. The canals are washed with disinfectant solutions and widened to prepare them for filling.</li>
            <li><strong>Filling the Canals:</strong> The cleaned and shaped canals are hermetically sealed with a biocompatible filling material called "gutta-percha."</li>
            <li><strong>Restoration:</strong> After the root canal treatment is completed, the top of the tooth is closed with a temporary or permanent filling. Since root canal-treated teeth can become more brittle over time, it is often recommended to restore the tooth with a crown to increase its durability and ensure its longevity.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Is root canal treatment a painful procedure?</summary>
            <div class="faq-answer"><p>No. Thanks to modern anesthesia techniques and technologies, root canal treatment is a completely painless procedure. In fact, the treatment is performed to eliminate existing severe toothache.</p></div>
        </details>
        <details class="faq-item">
            <summary>How many sessions does the treatment take?</summary>
            <div class="faq-answer"><p>Thanks to modern technologies like rotary instrument systems used in our clinic, most cases can be successfully completed in a single session (about 1-1.5 hours). However, depending on the state of the infection, a second session may sometimes be necessary.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can a root canal-treated tooth last a lifetime?</summary>
            <div class="faq-answer"><p>Yes. With a successful root canal treatment and a good restoration (filling or crown) on top, the tooth can remain in the mouth for a lifetime, provided that proper oral care is maintained. It requires regular brushing, flossing, and dental check-ups, just like your natural teeth.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Endodontie (Wurzelkanalbehandlung)?</h2>
        <p class="mb-4">Die Endodontie befasst sich mit Krankheiten und Verletzungen des inneren Teils des Zahnes, der Pulpa (dem lebenden Gewebe, das Nerven, Blut- und Lymphgefäße enthält). Dieses als "Wurzelkanalbehandlung" bekannte Verfahren zielt darauf ab, einen Zahn zu retten, der aufgrund von tiefem Karies, Trauma oder Rissen infiziert, entzündet oder seine Vitalität verloren hat, und Schmerzen zu beseitigen.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Warum ist eine Wurzelkanalbehandlung notwendig?</h3>
        <p class="mb-4">Wenn die Pulpa des Zahnes beschädigt ist, vermehren sich Bakterien in diesem Bereich. Unbehandelt kann sich die Infektion bis zur Wurzelspitze ausbreiten und zu einem Abszess im Kieferknochen führen. Dies kann zu starken Schmerzen, Schwellungen, Knochenverlust und letztendlich zum Zahnverlust führen. Die Wurzelkanaltherapie ist eine sehr erfolgreiche Methode, die den Zahn vor der Extraktion bewahrt und die Ausbreitung der Infektion verhindert.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Schritt-für-Schritt-Behandlungsprozess</h3>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Diagnose und Anästhesie:</strong> Der Zahnarzt diagnostiziert das Problem mit einer Röntgenaufnahme und einer klinischen Untersuchung. Vor Beginn der Behandlung wird der zu behandelnde Zahn und seine Umgebung mit einer Lokalanästhesie vollständig betäubt, was den Eingriff schmerzfrei macht.</li>
            <li><strong>Isolation und Zugang:</strong> Der Zahn wird mit einem Gummituch, einem sogenannten "Kofferdam", abgedeckt, um ihn von Speichel und Bakterien zu isolieren. Dann wird eine Öffnung von der Oberseite des Zahnes geschaffen, um Zugang zur Pulpa zu erhalten.</li>
            <li><strong>Reinigung und Formung der Kanäle:</strong> Das infizierte oder entzündete Pulpagewebe wird mit speziellen Instrumenten und Rotationssystemen aus den Wurzelkanälen entfernt. Die Kanäle werden mit Desinfektionslösungen gespült und erweitert, um sie für die Füllung vorzubereiten.</li>
            <li><strong>Füllen der Kanäle:</strong> Die gereinigten und geformten Kanäle werden mit einem biokompatiblen Füllmaterial namens "Guttapercha" hermetisch versiegelt.</li>
            <li><strong>Restauration:</strong> Nach Abschluss der Wurzelkanalbehandlung wird die Oberseite des Zahnes mit einer provisorischen oder dauerhaften Füllung verschlossen. Da wurzelkanalbehandelte Zähne mit der Zeit spröder werden können, wird oft empfohlen, den Zahn mit einer Krone zu restaurieren, um seine Haltbarkeit zu erhöhen und seine Langlebigkeit zu gewährleisten.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Ist eine Wurzelkanalbehandlung ein schmerzhafter Eingriff?</summary>
            <div class="faq-answer"><p>Nein. Dank moderner Anästhesietechniken und -technologien ist die Wurzelkanalbehandlung ein völlig schmerzfreier Eingriff. Tatsächlich wird die Behandlung durchgeführt, um bestehende starke Zahnschmerzen zu beseitigen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie viele Sitzungen dauert die Behandlung?</summary>
            <div class="faq-answer"><p>Dank moderner Technologien wie den in unserer Klinik verwendeten Rotationsinstrumentensystemen können die meisten Fälle erfolgreich in einer einzigen Sitzung (ca. 1-1,5 Stunden) abgeschlossen werden. Je nach Zustand der Infektion kann jedoch manchmal eine zweite Sitzung erforderlich sein.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann ein wurzelkanalbehandelter Zahn ein Leben lang halten?</summary>
            <div class="faq-answer"><p>Ja. Mit einer erfolgreichen Wurzelkanalbehandlung und einer guten Restauration (Füllung oder Krone) kann der Zahn bei richtiger Mundpflege ein Leben lang im Mund bleiben. Er erfordert regelmäßiges Zähneputzen, die Verwendung von Zahnseide und zahnärztliche Kontrollen, genau wie Ihre natürlichen Zähne.</p></div>
        </details>`
    },
    icon: React.createElement(ToothIcon),
    imageUrl: 'https://i.imgur.com/d2oX1kv.jpg',
    relatedDoctorIds: ['dt-furkan-emre-yildiz'],
  },
  {
    id: 'ortodonti',
    name: { tr: 'Ortodonti', en: 'Orthodontics', de: 'Kieferorthopädie' },
    category: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: {
      tr: 'Her yaş için uygun, metal braketler veya modern şeffaf plaklar (Invisalign) ile diş çapraşıklıklarına estetik ve fonksiyonel çözümler.',
      en: 'Aesthetic and functional solutions for crooked teeth with metal braces or modern clear aligners (Invisalign), suitable for all ages.',
      de: 'Ästhetische und funktionelle Lösungen für schiefe Zähne mit Metallbrackets oder modernen transparenten Alignern (Invisalign), geeignet für jedes Alter.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Ortodonti Nedir?</h2>
        <p class="mb-4">Ortodonti, dişlerdeki ve çenelerdeki uyumsuzlukları ve çapraşıklıkları teşhis eden, önleyen ve tedavi eden diş hekimliği uzmanlık dalıdır. Düzgün sıralanmış dişler sadece estetik bir gülüş sağlamakla kalmaz, aynı zamanda çiğneme fonksiyonunu iyileştirir, konuşmayı düzeltir ve dişlerin daha kolay temizlenmesine olanak tanıyarak çürük ve diş eti hastalıkları riskini azaltır.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kimler Ortodontik Tedavi Görebilir?</h3>
        <p class="mb-4">Ortodontik tedavi için yaş sınırı yoktur. Diş ve diş eti sağlığı yerinde olan herkes, çocukluktan yetişkinliğe kadar her yaşta bu tedaviden faydalanabilir. Özellikle:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Dişleri çapraşık, dönük veya aralıklı olanlar.</li>
          <li>Alt ve üst çenenin kapanışında problem yaşayanlar (örn: alt çenenin önde veya geride olması).</li>
          <li>Çiğneme veya konuşma güçlüğü çekenler.</li>
          <li>Estetik olarak daha düzgün bir gülüşe sahip olmak isteyenler.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Ortodontik Tedavi Seçenekleri</h3>
        <p class="mb-4">Kliniğimizde, hastalarımızın ihtiyaç ve beklentilerine göre çeşitli modern tedavi seçenekleri sunulmaktadır:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Metal Braketler (Diş Teli):</strong> En yaygın kullanılan, dayanıklı ve özellikle karmaşık vakalarda oldukça etkili olan geleneksel yöntemdir.</li>
          <li><strong>Şeffaf (Porselen) Braketler:</strong> Metal braketlerle aynı prensipte çalışır ancak diş renginde oldukları için daha az fark edilirler ve estetik bir alternatif sunarlar.</li>
          <li><strong>Şeffaf Plaklar (Invisalign):</strong> Neredeyse görünmez olan, kişiye özel üretilmiş, takılıp çıkarılabilir plak serileridir. Özellikle yetişkin hastalar tarafından estetik, konforlu ve pratik olmaları nedeniyle sıkça tercih edilir.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Ortodontik tedavi ne kadar sürer?</summary>
            <div class="faq-answer"><p>Tedavi süresi, vakanın karmaşıklığına, kullanılan tedavi yöntemine ve hastanın yaşına göre değişiklik gösterir. Genellikle 1 ila 2.5 yıl arasında sürmektedir.</p></div>
        </details>
        <details class="faq-item">
            <summary>Diş teli ağrı yapar mı?</summary>
            <div class="faq-answer"><p>Tedavinin başlangıcında ve tellerin sıkıldığı kontrol seanslarından sonraki ilk birkaç gün hafif bir baskı ve hassasiyet hissedilmesi normaldir. Bu durum kısa sürede geçer ve ağrı kesicilerle kolayca kontrol altına alınabilir.</p></div>
        </details>
        <details class="faq-item">
            <summary>Şeffaf plaklar gerçekten etkili mi?</summary>
            <div class="faq-answer"><p>Evet. Özellikle hafif ve orta dereceli çapraşıklıkların tedavisinde son derece etkilidirler. Tedavinin başarısı, plakların hekimin önerdiği şekilde günde ortalama 20-22 saat düzenli olarak kullanılmasına bağlıdır.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Orthodontics?</h2>
        <p class="mb-4">Orthodontics is a specialized branch of dentistry that diagnoses, prevents, and treats misalignments and irregularities in the teeth and jaws. Properly aligned teeth not only provide an aesthetic smile but also improve chewing function, correct speech, and reduce the risk of cavities and gum disease by allowing for easier cleaning.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Who Can Undergo Orthodontic Treatment?</h3>
        <p class="mb-4">There is no age limit for orthodontic treatment. Anyone with healthy teeth and gums, from childhood to adulthood, can benefit from this treatment. Especially:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Those with crowded, crooked, or spaced teeth.</li>
          <li>Those with problems in the bite of the upper and lower jaws (e.g., underbite or overbite).</li>
          <li>Those who have difficulty chewing or speaking.</li>
          <li>Those who want to have an aesthetically more pleasing smile.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Orthodontic Treatment Options</h3>
        <p class="mb-4">In our clinic, we offer various modern treatment options according to the needs and expectations of our patients:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Metal Braces:</strong> The most commonly used, durable, and highly effective traditional method, especially in complex cases.</li>
          <li><strong>Clear (Porcelain) Braces:</strong> They work on the same principle as metal braces but are less noticeable as they are tooth-colored, offering an aesthetic alternative.</li>
          <li><strong>Clear Aligners (Invisalign):</strong> A series of custom-made, removable, nearly invisible aligners. They are often preferred by adult patients for being aesthetic, comfortable, and practical.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>How long does orthodontic treatment take?</summary>
            <div class="faq-answer"><p>The duration of treatment varies depending on the complexity of the case, the treatment method used, and the patient's age. It usually lasts between 1 and 2.5 years.</p></div>
        </details>
        <details class="faq-item">
            <summary>Do braces hurt?</summary>
            <div class="faq-answer"><p>It is normal to feel mild pressure and sensitivity for the first few days at the beginning of the treatment and after the adjustment appointments. This discomfort is temporary and can be easily managed with painkillers.</p></div>
        </details>
        <details class="faq-item">
            <summary>Are clear aligners really effective?</summary>
            <div class="faq-answer"><p>Yes. They are extremely effective, especially in treating mild to moderate crowding. The success of the treatment depends on the regular use of the aligners for an average of 20-22 hours a day, as recommended by the dentist.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Kieferorthopädie?</h2>
        <p class="mb-4">Die Kieferorthopädie ist ein spezialisierter Zweig der Zahnmedizin, der Fehlstellungen und Unregelmäßigkeiten der Zähne und Kiefer diagnostiziert, verhindert und behandelt. Richtig ausgerichtete Zähne sorgen nicht nur für ein ästhetisches Lächeln, sondern verbessern auch die Kaufunktion, korrigieren die Sprache und verringern das Risiko von Karies und Zahnfleischerkrankungen, da sie leichter zu reinigen sind.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Wer kann eine kieferorthopädische Behandlung erhalten?</h3>
        <p class="mb-4">Es gibt keine Altersgrenze für eine kieferorthopädische Behandlung. Jeder mit gesunden Zähnen und Zahnfleisch, vom Kindes- bis zum Erwachsenenalter, kann von dieser Behandlung profitieren. Insbesondere:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Personen mit engstehenden, schiefen oder lückigen Zähnen.</li>
          <li>Personen mit Problemen beim Zusammenbiss von Ober- und Unterkiefer (z. B. Unterbiss oder Überbiss).</li>
          <li>Personen, die Schwierigkeiten beim Kauen oder Sprechen haben.</li>
          <li>Personen, die ein ästhetisch ansprechenderes Lächeln wünschen.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kieferorthopädische Behandlungsoptionen</h3>
        <p class="mb-4">In unserer Klinik bieten wir verschiedene moderne Behandlungsmöglichkeiten entsprechend den Bedürfnissen und Erwartungen unserer Patienten an:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Metallbrackets (Zahnspangen):</strong> Die am häufigsten verwendete, langlebige und hochwirksame traditionelle Methode, insbesondere in komplexen Fällen.</li>
          <li><strong>Transparente (Porzellan-)Brackets:</strong> Sie funktionieren nach dem gleichen Prinzip wie Metallbrackets, sind aber weniger auffällig, da sie zahnfarben sind und eine ästhetische Alternative bieten.</li>
          <li><strong>Transparente Aligner (Invisalign):</strong> Eine Serie von maßgefertigten, herausnehmbaren, fast unsichtbaren Alignern. Sie werden oft von erwachsenen Patienten bevorzugt, da sie ästhetisch, komfortabel und praktisch sind.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Wie lange dauert eine kieferorthopädische Behandlung?</summary>
            <div class="faq-answer"><p>Die Behandlungsdauer variiert je nach Komplexität des Falles, der angewandten Behandlungsmethode und dem Alter des Patienten. Sie dauert in der Regel zwischen 1 und 2,5 Jahren.</p></div>
        </details>
        <details class="faq-item">
            <summary>Tut eine Zahnspange weh?</summary>
            <div class="faq-answer"><p>Es ist normal, in den ersten Tagen zu Beginn der Behandlung und nach den Anpassungsterminen einen leichten Druck und eine leichte Empfindlichkeit zu spüren. Diese Unannehmlichkeiten sind vorübergehend und können leicht mit Schmerzmitteln behandelt werden.</p></div>
        </details>
        <details class="faq-item">
            <summary>Sind transparente Aligner wirklich wirksam?</summary>
            <div class="faq-answer"><p>Ja. Sie sind äußerst wirksam, insbesondere bei der Behandlung von leichten bis mittelschweren Engständen. Der Erfolg der Behandlung hängt von der regelmäßigen Anwendung der Aligner für durchschnittlich 20-22 Stunden pro Tag ab, wie vom Zahnarzt empfohlen.</p></div>
        </details>`
    },
    icon: React.createElement(AdjustmentsHorizontalIcon),
    imageUrl: 'https://i.imgur.com/VdmUiHs.jpg',
    relatedDoctorIds: ['dt-busra-beyhan', 'dt-furkan-akyildiz'],
  },
  {
    id: 'dis-beyazlatma',
    name: { tr: 'Diş Beyazlatma', en: 'Teeth Whitening', de: 'Zahnaufhellung' },
    category: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: {
      tr: 'Daha parlak ve çekici bir gülüş için ofis tipi (klinikte) veya ev tipi profesyonel diş beyazlatma çözümleri.',
      en: 'Office-type (in-clinic) or home-type professional teeth whitening solutions for a brighter and more attractive smile.',
      de: 'Professionelle Zahnaufhellungslösungen für ein strahlenderes und attraktiveres Lächeln, entweder in der Praxis oder zu Hause.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Diş Beyazlatma (Bleaching) Nedir?</h2>
        <p class="mb-4">Diş beyazlatma, dişlerin mine ve dentin tabakasında çeşitli nedenlerle oluşan renklenmeleri gidererek, dişlerin rengini birkaç ton açma işlemidir. Zamanla tüketilen çay, kahve, sigara gibi ürünlerin neden olduğu sararmaları ortadan kaldırarak daha estetik, sağlıklı ve genç bir gülüş sağlar.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Beyazlatma Yöntemleri</h3>
        <p class="mb-4">Kliniğimizde, güvenilir ve etkili iki temel beyazlatma yöntemi uygulanmaktadır:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Ofis Tipi Beyazlatma (Office Bleaching):</strong> Klinik ortamında, diş hekimi tarafından uygulanan en hızlı ve en etkili yöntemdir. Diş etleri özel bir koruyucu bariyer ile kapatıldıktan sonra, dişlere yüksek konsantrasyonlu beyazlatma jeli uygulanır. Bu jel, özel bir LED veya lazer ışık kaynağı ile aktive edilerek yaklaşık 1 saat içinde dişlerde gözle görülür bir beyazlama sağlanır.</li>
            <li><strong>Ev Tipi Beyazlatma (Home Bleaching):</strong> Hekiminizin aldığı ölçüye göre size özel hazırlanan şeffaf plaklar ve daha düşük konsantrasyonlu beyazlatma jelleri ile evde uygulanan bir yöntemdir. Plakların içine jel sıkılır ve hekiminizin önerdiği sürelerde (genellikle günde 4-6 saat) 1-2 hafta boyunca düzenli olarak takılır.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Kimler İçin Uygundur?</h3>
        <p class="mb-4">Diş ve diş eti sağlığı iyi olan, 18 yaşını doldurmuş ve dişlerinde renklenmelerden şikayetçi olan hemen herkes için uygundur. Ancak tedavi öncesinde mutlaka bir diş hekimi muayenesi gereklidir. Çürükler, diş eti hastalıkları veya dişlerdeki çatlaklar beyazlatma işleminden önce tedavi edilmelidir.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Diş beyazlatma işlemi dişlere zarar verir mi?</summary>
            <div class="faq-answer"><p>Hayır. Diş hekimi kontrolünde yapılan profesyonel beyazlatma işlemleri dişin yapısına zarar vermez. Kullanılan jeller güvenilirdir ve sadece renklenmelere etki eder.</p></div>
        </details>
        <details class="faq-item">
            <summary>Beyazlatma işlemi sırasında ağrı hisseder miyim?</summary>
            <div class="faq-answer"><p>İşlem sırasında ağrı hissedilmez. Ancak tedavi sonrası ilk 24-48 saat içinde bazı kişilerde sıcak ve soğuğa karşı geçici bir hassasiyet oluşabilir. Bu durum normaldir ve kısa sürede kendiliğinden geçer.</p></div>
        </details>
        <details class="faq-item">
            <summary>Beyazlatmanın etkisi ne kadar sürer?</summary>
            <div class="faq-answer"><p>Beyazlatmanın kalıcılığı kişinin ağız bakım alışkanlıklarına ve beslenme düzenine bağlıdır. Çay, kahve, sigara gibi renklendirici ürünlerden uzak durarak ve düzenli diş bakımı yaparak etki süresini 2-3 yıla kadar uzatmak mümkündür.</p></div>
        </details>
        <details class="faq-item">
            <summary>Beyazlatma işlemi dolgu ve kaplamaların rengini açar mı?</summary>
            <div class="faq-answer"><p>Hayır, beyazlatma işlemi sadece doğal diş dokusuna etki eder. Mevcut porselen kaplama, dolgu veya protezlerin rengini değiştirmez. Bu nedenle, beyazlatma sonrası bu restorasyonların yeni diş rengine uygun olarak yenilenmesi gerekebilir.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Teeth Whitening (Bleaching)?</h2>
        <p class="mb-4">Teeth whitening is the process of lightening the color of teeth by several shades by removing stains that have formed on the enamel and dentin layers for various reasons. It provides a more aesthetic, healthy, and youthful smile by eliminating the yellowing caused by products like tea, coffee, and cigarettes consumed over time.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Whitening Methods</h3>
        <p class="mb-4">Two main reliable and effective whitening methods are applied in our clinic:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Office Bleaching:</strong> The fastest and most effective method applied by a dentist in a clinical setting. After the gums are covered with a special protective barrier, a high-concentration whitening gel is applied to the teeth. This gel is activated with a special LED or laser light source to achieve visible whitening in about 1 hour.</li>
            <li><strong>Home Bleaching:</strong> A method applied at home with custom-made transparent trays prepared according to the impression taken by your dentist and lower-concentration whitening gels. The gel is squeezed into the trays, which are worn regularly for 1-2 weeks for the periods recommended by your dentist (usually 4-6 hours a day).</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Who Is It For?</h3>
        <p class="mb-4">It is suitable for almost anyone over the age of 18 with good dental and gum health who is unhappy with the discoloration of their teeth. However, a dental examination is absolutely necessary before treatment. Cavities, gum diseases, or cracks in the teeth must be treated before the whitening procedure.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Does teeth whitening damage the teeth?</summary>
            <div class="faq-answer"><p>No. Professional whitening procedures performed under the supervision of a dentist do not damage the tooth structure. The gels used are safe and only affect the stains.</p></div>
        </details>
        <details class="faq-item">
            <summary>Will I feel pain during the whitening process?</summary>
            <div class="faq-answer"><p>No pain is felt during the procedure. However, some people may experience temporary sensitivity to hot and cold in the first 24-48 hours after treatment. This is normal and usually resolves on its own in a short time.</p></div>
        </details>
        <details class="faq-item">
            <summary>How long do the effects of whitening last?</summary>
            <div class="faq-answer"><p>The longevity of the whitening depends on the person's oral care habits and diet. It is possible to extend the effect for up to 2-3 years by avoiding staining products like tea, coffee, and cigarettes and by maintaining regular dental care.</p></div>
        </details>
        <details class="faq-item">
            <summary>Does whitening change the color of fillings and crowns?</summary>
            <div class="faq-answer"><p>No, the whitening process only affects natural tooth tissue. It does not change the color of existing porcelain crowns, fillings, or prostheses. Therefore, it may be necessary to renew these restorations to match the new tooth color after whitening.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Zahnaufhellung (Bleaching)?</h2>
        <p class="mb-4">Die Zahnaufhellung ist der Prozess, bei dem die Farbe der Zähne um mehrere Nuancen aufgehellt wird, indem Verfärbungen entfernt werden, die sich aus verschiedenen Gründen auf den Schmelz- und Dentinschichten gebildet haben. Es sorgt für ein ästhetischeres, gesünderes und jugendlicheres Lächeln, indem es die durch Produkte wie Tee, Kaffee und Zigaretten im Laufe der Zeit verursachte Vergilbung beseitigt.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Aufhellungsmethoden</h3>
        <p class="mb-4">In unserer Klinik werden zwei zuverlässige und wirksame Aufhellungsmethoden angewendet:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Office-Bleaching:</strong> Die schnellste und effektivste Methode, die von einem Zahnarzt in einer klinischen Umgebung angewendet wird. Nachdem das Zahnfleisch mit einer speziellen Schutzbarriere abgedeckt wurde, wird ein hochkonzentriertes Aufhellungsgel auf die Zähne aufgetragen. Dieses Gel wird mit einer speziellen LED- oder Laserlichtquelle aktiviert, um in etwa 1 Stunde eine sichtbare Aufhellung zu erzielen.</li>
            <li><strong>Home-Bleaching:</strong> Eine Methode, die zu Hause mit maßgefertigten transparenten Schienen angewendet wird, die nach dem von Ihrem Zahnarzt genommenen Abdruck und Aufhellungsgelen mit geringerer Konzentration hergestellt werden. Das Gel wird in die Schienen gedrückt, die regelmäßig 1-2 Wochen lang für die von Ihrem Zahnarzt empfohlenen Zeiträume (normalerweise 4-6 Stunden pro Tag) getragen werden.</li>
        </ol>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Für wen ist es geeignet?</h3>
        <p class="mb-4">Es ist für fast jeden über 18 Jahren mit guter Zahn- und Zahnfleischgesundheit geeignet, der mit der Verfärbung seiner Zähne unzufrieden ist. Vor der Behandlung ist jedoch eine zahnärztliche Untersuchung unbedingt erforderlich. Karies, Zahnfleischerkrankungen oder Risse in den Zähnen müssen vor dem Aufhellungsverfahren behandelt werden.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Schädigt die Zahnaufhellung die Zähne?</summary>
            <div class="faq-answer"><p>Nein. Professionelle Aufhellungsverfahren, die unter zahnärztlicher Aufsicht durchgeführt werden, schädigen die Zahnstruktur nicht. Die verwendeten Gele sind sicher und wirken nur auf die Verfärbungen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Werde ich während des Aufhellungsprozesses Schmerzen verspüren?</summary>
            <div class="faq-answer"><p>Während des Eingriffs werden keine Schmerzen verspürt. Einige Personen können jedoch in den ersten 24-48 Stunden nach der Behandlung eine vorübergehende Empfindlichkeit gegenüber Hitze und Kälte verspüren. Dies ist normal und verschwindet in der Regel von selbst nach kurzer Zeit.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie lange hält die Wirkung der Aufhellung an?</summary>
            <div class="faq-answer"><p>Die Langlebigkeit der Aufhellung hängt von den Mundpflegegewohnheiten und der Ernährung der Person ab. Es ist möglich, die Wirkung durch Vermeidung von färbenden Produkten wie Tee, Kaffee und Zigaretten und durch regelmäßige Zahnpflege auf bis zu 2-3 Jahre zu verlängern.</p></div>
        </details>
        <details class="faq-item">
            <summary>Ändert die Aufhellung die Farbe von Füllungen und Kronen?</summary>
            <div class="faq-answer"><p>Nein, der Aufhellungsprozess wirkt sich nur auf das natürliche Zahngewebe aus. Er ändert nicht die Farbe vorhandener Porzellankronen, Füllungen oder Prothesen. Daher kann es erforderlich sein, diese Restaurationen nach der Aufhellung zu erneuern, um sie an die neue Zahnfarbe anzupassen.</p></div>
        </details>`
    },
    icon: React.createElement(CheckCircleIcon),
    imageUrl: 'https://i.imgur.com/MqdNGFw.jpg',
    relatedDoctorIds: ['dt-seher-kocabas', 'dt-furkan-akyildiz'],
  },
  {
    id: 'cerrahi-dis-cekimi',
    name: { tr: 'Cerrahi Diş Çekimi', en: 'Surgical Tooth Extraction', de: 'Chirurgische Zahnextraktion' },
    category: { tr: 'Cerrahi ve Restoratif Tedaviler', en: 'Surgical and Restorative Treatments', de: 'Chirurgische und restaurative Behandlungen' },
    description: {
      tr: 'Gömülü 20 yaş dişleri ve kurtarılamayacak durumdaki dişler için ağrısız ve güvenli cerrahi çekim işlemleri.',
      en: 'Painless and safe surgical extraction procedures for impacted wisdom teeth and teeth that cannot be saved.',
      de: 'Schmerzlose und sichere chirurgische Extraktionsverfahren für impaktierte Weisheitszähne und nicht erhaltungswürdige Zähne.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Cerrahi Diş Çekimi Nedir?</h2>
        <p class="mb-4">Cerrahi diş çekimi, basit bir çekimle alınamayan, yani diş etinin altında veya çene kemiği içinde kalmış (gömülü) dişlerin, kökleri komplike olan dişlerin veya ileri derecede hasar görmüş diş köklerinin alınması işlemidir. En sık olarak 20 yaş dişleri (akıl dişleri) için uygulanır ancak diğer dişler için de gerekli olabilir.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Ne Zaman Gerekir?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Gömülü Dişler:</strong> Çenede yeterli yer olmaması nedeniyle tam olarak sürememiş dişler. Bu dişler ağrıya, enfeksiyona (perikoronit), komşu dişlerde çürüğe veya baskıya neden olabilir.</li>
          <li><strong>Kök Kırıkları:</strong> Travma veya ileri derecede çürük nedeniyle dişin görünen kısmı (kuron) kırılmış ancak kökleri kemik içinde kalmışsa.</li>
          <li><strong>Kist veya Tümör Varlığı:</strong> Diş kökü etrafında oluşan patolojik oluşumlarla birlikte dişin alınması gerektiğinde.</li>
          <li><strong>Ortodontik Nedenler:</strong> Diş teli tedavisi için yer kazanmak amacıyla bazen sağlam dişlerin cerrahi olarak çekilmesi gerekebilir.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">İşlem Nasıl Yapılır ve Ağrılı mıdır?</h3>
        <p class="mb-4">İşlem, lokal anestezi altında yapıldığı için <strong>tamamen ağrısızdır</strong>. Cerrah, diş etinde küçük bir kesi yaparak dişe veya köke ulaşır. Gerekirse dişin etrafındaki kemikten bir miktar kaldırabilir veya dişi birkaç parçaya ayırarak daha kolay çıkarabilir. İşlem sonrası bölge genellikle dikişlerle kapatılır. Bu dikişler kendiliğinden eriyen türde olabilir veya bir hafta sonra alınması gerekebilir.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Çekim sonrası iyileşme süreci nasıldır?</summary>
            <div class="faq-answer"><p>İlk 24 saat en önemli dönemdir. Hekiminizin verdiği tamponu ısırmalı, tükürmemeli ve pipet kullanmamalısınız. İlk günlerde hafif bir şişlik ve sızıntı şeklinde kanama normaldir. Soğuk kompres uygulamak şişliği azaltır. Yumuşak ve ılık gıdalarla beslenmek gerekir. Hekiminizin reçete ettiği ilaçları düzenli kullanmak önemlidir.</p></div>
        </details>
        <details class="faq-item">
            <summary>"Kuru Soket" (Alveolit) nedir ve nasıl önlenir?</summary>
            <div class="faq-answer"><p>Kuru soket, çekim boşluğunda oluşması gereken kan pıhtısının yerinden oynaması veya hiç oluşmaması durumudur ve şiddetli ağrıya neden olur. Önlemek için ilk 24 saat sigara ve alkol içmemek, tükürmemek, pipet kullanmamak ve ağzı şiddetli çalkalamamak çok önemlidir.</p></div>
        </details>
        `,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Surgical Tooth Extraction?</h2>
        <p class="mb-4">Surgical tooth extraction is the removal of teeth that cannot be removed with a simple extraction, such as impacted teeth under the gum or within the jawbone, teeth with complicated roots, or severely damaged tooth roots. It is most commonly performed for wisdom teeth but may also be necessary for other teeth.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">When is it Necessary?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Impacted Teeth:</strong> Teeth that have not fully erupted due to lack of space in the jaw. These teeth can cause pain, infection (pericoronitis), decay, or pressure on adjacent teeth.</li>
          <li><strong>Root Fractures:</strong> If the visible part of the tooth (crown) is broken due to trauma or advanced decay, but the roots remain in the bone.</li>
          <li><strong>Presence of Cysts or Tumors:</strong> When the tooth needs to be removed along with pathological formations around the tooth root.</li>
          <li><strong>Orthodontic Reasons:</strong> Sometimes healthy teeth may need to be surgically extracted to create space for orthodontic treatment.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">How is the Procedure Done and Is It Painful?</h3>
        <p class="mb-4">The procedure is performed under local anesthesia, so it is <strong>completely painless</strong>. The surgeon makes a small incision in the gum to access the tooth or root. If necessary, a small amount of bone around the tooth may be removed, or the tooth may be sectioned into several pieces for easier removal. The area is usually closed with stitches afterwards. These stitches may be dissolvable or may need to be removed a week later.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>What is the recovery process like after extraction?</summary>
            <div class="faq-answer"><p>The first 24 hours are the most critical. You should bite on the gauze pad provided by your dentist, not spit, and not use a straw. Mild swelling and oozing are normal in the first few days. Applying a cold compress will reduce swelling. You should eat soft and lukewarm foods. It is important to take the medications prescribed by your dentist regularly.</p></div>
        </details>
        <details class="faq-item">
            <summary>What is "Dry Socket" (Alveolitis) and how can it be prevented?</summary>
            <div class="faq-answer"><p>A dry socket is a condition where the blood clot that should form in the extraction socket dislodges or fails to form, causing severe pain. To prevent it, it is very important not to smoke or drink alcohol, not to spit, not to use a straw, and not to rinse the mouth vigorously for the first 24 hours.</p></div>
        </details>
        `,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist eine chirurgische Zahnextraktion?</h2>
        <p class="mb-4">Eine chirurgische Zahnextraktion ist die Entfernung von Zähnen, die nicht mit einer einfachen Extraktion entfernt werden können, wie z. B. impaktierte Zähne unter dem Zahnfleisch oder im Kieferknochen, Zähne mit komplizierten Wurzeln oder stark beschädigte Zahnwurzeln. Sie wird am häufigsten bei Weisheitszähnen durchgeführt, kann aber auch bei anderen Zähnen notwendig sein.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Wann ist sie notwendig?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Impaktierte Zähne:</strong> Zähne, die aufgrund von Platzmangel im Kiefer nicht vollständig durchgebrochen sind. Diese Zähne können Schmerzen, Infektionen (Perikoronitis), Karies oder Druck auf benachbarte Zähne verursachen.</li>
          <li><strong>Wurzelfrakturen:</strong> Wenn der sichtbare Teil des Zahnes (Krone) aufgrund eines Traumas oder fortgeschrittener Karies gebrochen ist, aber die Wurzeln im Knochen verbleiben.</li>
          <li><strong>Vorhandensein von Zysten oder Tumoren:</strong> Wenn der Zahn zusammen mit pathologischen Formationen um die Zahnwurzel entfernt werden muss.</li>
          <li><strong>Kieferorthopädische Gründe:</strong> Manchmal müssen gesunde Zähne chirurgisch extrahiert werden, um Platz für eine kieferorthopädische Behandlung zu schaffen.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Wie wird der Eingriff durchgeführt und ist er schmerzhaft?</h3>
        <p class="mb-4">Der Eingriff wird unter örtlicher Betäubung durchgeführt und ist daher <strong>völlig schmerzfrei</strong>. Der Chirurg macht einen kleinen Schnitt im Zahnfleisch, um Zugang zum Zahn oder zur Wurzel zu erhalten. Bei Bedarf kann eine kleine Menge Knochen um den Zahn entfernt werden, oder der Zahn kann zur leichteren Entfernung in mehrere Teile zerlegt werden. Der Bereich wird danach in der Regel mit Nähten verschlossen. Diese Nähte können selbstauflösend sein oder müssen eine Woche später entfernt werden.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Wie verläuft der Genesungsprozess nach der Extraktion?</summary>
            <div class="faq-answer"><p>Die ersten 24 Stunden sind die kritischsten. Sie sollten auf den von Ihrem Zahnarzt bereitgestellten Gazetupfer beißen, nicht spucken und keinen Strohhalm verwenden. Leichte Schwellungen und leichtes Nässen sind in den ersten Tagen normal. Das Anlegen eines kalten Umschlags reduziert die Schwellung. Sie sollten weiche und lauwarme Speisen zu sich nehmen. Es ist wichtig, die von Ihrem Zahnarzt verschriebenen Medikamente regelmäßig einzunehmen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Was ist eine "trockene Alveole" (Alveolitis) und wie kann sie verhindert werden?</summary>
            <div class="faq-answer"><p>Eine trockene Alveole ist ein Zustand, bei dem sich das Blutgerinnsel, das sich in der Extraktionswunde bilden sollte, löst oder nicht bildet, was starke Schmerzen verursacht. Um dies zu verhindern, ist es sehr wichtig, in den ersten 24 Stunden nicht zu rauchen oder Alkohol zu trinken, nicht zu spucken, keinen Strohhalm zu verwenden und den Mund nicht kräftig auszuspülen.</p></div>
        </details>
        `
    },
    icon: React.createElement(ToothIcon),
    imageUrl: 'https://i.imgur.com/qZQZ3yr.jpg',
    relatedDoctorIds: ['dt-burak-senol'],
  },
  {
    id: 'protezler',
    name: { tr: 'Protetik Diş Tedavileri', en: 'Prosthetic Dentistry', de: 'Prothetische Zahnheilkunde' },
    category: { tr: 'Cerrahi ve Restoratif Tedaviler', en: 'Surgical and Restorative Treatments', de: 'Chirurgische und restaurative Behandlungen' },
    description: {
      tr: 'Sabit (kuron-köprü) ve hareketli (damak) protezlerle kaybedilen dişlerin fonksiyon ve estetiğini geri kazanın.',
      en: 'Regain the function and aesthetics of lost teeth with fixed (crown-bridge) and removable (denture) prosthetics.',
      de: 'Gewinnen Sie die Funktion und Ästhetik verlorener Zähne mit festsitzenden (Kronen-Brücken) und herausnehmbaren (Prothesen) Prothetiken zurück.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Protetik Diş Tedavisi Nedir?</h2>
        <p class="mb-4">Protetik diş tedavisi, çeşitli nedenlerle kaybedilmiş dişlerin veya çevre dokuların yerine yapay materyallerle yenilerinin konularak, hastanın kaybettiği çiğneme fonksiyonunu, konuşma yeteneğini ve estetik görünümünü geri kazandırmayı amaçlayan bir diş hekimliği dalıdır.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sabit Protezler</h3>
        <p class="mb-4">Hastanın takıp çıkaramadığı, mevcut dişlere veya implantlara yapıştırılarak ya da vidalanarak sabitlenen protezlerdir.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Kuron (Kaplama):</strong> Aşırı madde kaybı olan, kanal tedavisi görmüş veya estetik olarak düzeltilmesi gereken dişleri korumak için dişin üzerinin tamamen kaplanmasıdır. Zirkonyum, E-max veya metal destekli porselen gibi materyallerden yapılabilir.</li>
          <li><strong>Köprü:</strong> Bir veya daha fazla diş eksikliğinde, komşu dişlerden destek alınarak aradaki boşluğun doldurulmasıdır. Komşu dişler küçültülerek üzerlerine birleşik bir kaplama yapılır.</li>
          <li><strong>İmplant Üstü Sabit Protezler:</strong> Bir veya daha fazla implant üzerine sabitlenen kuron veya köprülerdir. Doğal dişe en yakın çözümü sunarlar.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Hareketli Protezler</h3>
        <p class="mb-4">Hastanın kendisinin takıp çıkarabildiği, genellikle çok sayıda diş eksikliğinde veya tüm dişlerin eksikliğinde uygulanan protezlerdir.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Total Protezler (Tam Damak):</strong> Ağızda hiç diş kalmadığında, alt ve üst çeneye oturan tam protezlerdir.</li>
          <li><strong>Parsiyel (Bölümlü) Protezler:</strong> Ağızdaki mevcut dişlerden kancalar veya hassas tutucularla destek alan, eksik dişlerin yerini dolduran protezlerdir.</li>
          <li><strong>İmplant Üstü Hareketli Protezler:</strong> Çene kemiğine yerleştirilen 2 veya 4 implanttan "tıt-çıt" benzeri özel bağlantılarla destek alan protezlerdir. Geleneksel total protezlere göre çok daha stabil ve konforludurlar.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Protezime alışmam ne kadar sürer?</summary>
            <div class="faq-answer"><p>Alışma süresi protezin tipine ve kişiye göre değişir. Sabit protezlere genellikle birkaç günde alışılırken, hareketli protezlere alışmak birkaç hafta sürebilir. Bu süreçte konuşma ve yeme alıştırmaları yapmak önemlidir.</p></div>
        </details>
        <details class="faq-item">
            <summary>Hareketli protezlerin bakımı nasıl yapılır?</summary>
            <div class="faq-answer"><p>Hareketli protezler her yemekten sonra çıkarılıp fırçalanmalı ve gece yatarken özel protez solüsyonlarında bekletilmelidir. Bu, hem protezin ömrünü uzatır hem de ağız sağlığını korur.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Prosthetic Dentistry?</h2>
        <p class="mb-4">Prosthetic dentistry is a branch of dentistry that aims to restore a patient's lost chewing function, speaking ability, and aesthetic appearance by replacing teeth or surrounding tissues lost for various reasons with artificial materials.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Fixed Prosthetics</h3>
        <p class="mb-4">These are prosthetics that are fixed by being cemented or screwed onto existing teeth or implants and cannot be removed by the patient.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Crown:</strong> The complete covering of a tooth to protect teeth with excessive substance loss, that have undergone root canal treatment, or that need aesthetic correction. It can be made from materials like zirconium, E-max, or metal-supported porcelain.</li>
          <li><strong>Bridge:</strong> Filling the gap in the case of one or more missing teeth by taking support from adjacent teeth. The adjacent teeth are reduced and a combined crown is placed on them.</li>
          <li><strong>Implant-Supported Fixed Prosthetics:</strong> These are crowns or bridges fixed on one or more implants. They offer the solution closest to a natural tooth.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Removable Prosthetics</h3>
        <p class="mb-4">These are prosthetics that the patient can insert and remove themselves, usually applied in cases of numerous missing teeth or total tooth loss.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Total Dentures (Full Dentures):</strong> Full dentures that sit on the lower and upper jaws when no teeth are left in the mouth.</li>
          <li><strong>Partial Dentures:</strong> Prosthetics that fill the place of missing teeth, supported by existing teeth in the mouth with clasps or precision attachments.</li>
          <li><strong>Implant-Supported Removable Prosthetics:</strong> Prosthetics supported by 2 or 4 implants placed in the jawbone with special "snap-on" attachments. They are much more stable and comfortable than traditional total dentures.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>How long will it take to get used to my prosthesis?</summary>
            <div class="faq-answer"><p>The adjustment period varies depending on the type of prosthesis and the individual. It usually takes a few days to get used to fixed prosthetics, while it may take a few weeks to get used to removable ones. It is important to practice speaking and eating during this period.</p></div>
        </details>
        <details class="faq-item">
            <summary>How do I care for removable prosthetics?</summary>
            <div class="faq-answer"><p>Removable prosthetics should be removed and brushed after every meal and soaked in a special denture solution at night. This both extends the life of the prosthesis and protects oral health.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist prothetische Zahnheilkunde?</h2>
        <p class="mb-4">Die prothetische Zahnheilkunde ist ein Zweig der Zahnmedizin, der darauf abzielt, die verlorene Kaufunktion, Sprechfähigkeit und das ästhetische Erscheinungsbild eines Patienten wiederherzustellen, indem aus verschiedenen Gründen verlorene Zähne oder umgebendes Gewebe durch künstliche Materialien ersetzt werden.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Festsitzende Prothetik</h3>
        <p class="mb-4">Dies sind Prothesen, die durch Zementieren oder Verschrauben auf vorhandenen Zähnen oder Implantaten befestigt werden und vom Patienten nicht entfernt werden können.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Krone:</strong> Die vollständige Überkronung eines Zahnes zum Schutz von Zähnen mit übermäßigem Substanzverlust, die eine Wurzelkanalbehandlung erhalten haben oder eine ästhetische Korrektur benötigen. Sie kann aus Materialien wie Zirkon, E-max oder metallkeramischem Porzellan hergestellt werden.</li>
          <li><strong>Brücke:</strong> Das Schließen der Lücke bei einem oder mehreren fehlenden Zähnen durch Unterstützung von Nachbarzähnen. Die Nachbarzähne werden beschliffen und eine kombinierte Krone darauf gesetzt.</li>
          <li><strong>Implantatgetragene festsitzende Prothetik:</strong> Dies sind Kronen oder Brücken, die auf einem oder mehreren Implantaten befestigt sind. Sie bieten die Lösung, die einem natürlichen Zahn am nächsten kommt.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Herausnehmbare Prothetik</h3>
        <p class="mb-4">Dies sind Prothesen, die der Patient selbst einsetzen und herausnehmen kann und die in der Regel bei zahlreichen fehlenden Zähnen oder totalem Zahnverlust angewendet werden.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Totalprothesen (Vollprothesen):</strong> Vollprothesen, die auf dem Unter- und Oberkiefer sitzen, wenn keine Zähne mehr im Mund vorhanden sind.</li>
          <li><strong>Teilprothesen:</strong> Prothesen, die den Platz fehlender Zähne füllen und von den vorhandenen Zähnen im Mund mit Klammern oder Präzisionsgeschieben gestützt werden.</li>
          <li><strong>Implantatgetragene herausnehmbare Prothetik:</strong> Prothesen, die von 2 oder 4 im Kieferknochen platzierten Implantaten mit speziellen "Druckknopf"-Verbindungen gestützt werden. Sie sind viel stabiler und komfortabler als herkömmliche Totalprothesen.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Wie lange dauert es, mich an meine Prothese zu gewöhnen?</summary>
            <div class="faq-answer"><p>Die Eingewöhnungszeit variiert je nach Art der Prothese und der Person. An festsitzende Prothesen gewöhnt man sich in der Regel in wenigen Tagen, während die Gewöhnung an herausnehmbare Prothesen einige Wochen dauern kann. Es ist wichtig, in dieser Zeit das Sprechen und Essen zu üben.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie pflege ich herausnehmbare Prothesen?</summary>
            <div class="faq-answer"><p>Herausnehmbare Prothesen sollten nach jeder Mahlzeit herausgenommen und gebürstet und nachts in einer speziellen Prothesenlösung aufbewahrt werden. Dies verlängert sowohl die Lebensdauer der Prothese als auch schützt die Mundgesundheit.</p></div>
        </details>`
    },
    icon: React.createElement(PuzzlePieceIcon),
    imageUrl: 'https://i.imgur.com/xySkpAr.jpg',
    relatedDoctorIds: ['dt-furkan-emre-yildiz', 'dt-burak-senol'],
  },
  {
    id: 'pedodonti',
    name: { tr: 'Pedodonti (Çocuk Diş Hekimliği)', en: 'Pedodontics (Pediatric Dentistry)', de: 'Pädodontie (Kinderzahnheilkunde)' },
    category: { tr: 'Koruyucu ve Pediatrik Diş Hekimliği', en: 'Preventive and Pediatric Dentistry', de: 'Präventive und pädiatrische Zahnheilkunde' },
    description: {
      tr: 'Bebeklikten ergenliğe kadar çocukların ağız ve diş sağlığını koruyan, onlara diş hekimi sevgisini aşılayan özel yaklaşımlar.',
      en: 'Special approaches that protect the oral and dental health of children from infancy to adolescence and instill a love for the dentist.',
      de: 'Spezielle Ansätze, die die Mund- und Zahngesundheit von Kindern vom Säuglings- bis zum Jugendalter schützen und ihnen die Liebe zum Zahnarzt vermitteln.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Pedodonti Nedir?</h2>
        <p class="mb-4">Pedodonti (Çocuk Diş Hekimliği), 0-14 yaş arası bebek, çocuk ve gençlerin süt ve daimi dişlerinin sağlığını korumayı, çürük, travma gibi sorunları tedavi etmeyi ve en önemlisi onlara diş hekimi korkusu olmadan, ağız bakımını bir alışkanlık haline getirmelerini sağlamayı hedefleyen uzmanlık dalıdır.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Çocuk Diş Hekimliğinde Sunduğumuz Hizmetler</h3>
        <p class="mb-4">Çocuğunuzun ilk diş hekimi deneyiminin pozitif olması, ömür boyu sürecek sağlıklı bir gülüşün temelini atar. Kliniğimizde, çocukların kendilerini rahat ve güvende hissedecekleri bir ortamda şu hizmetleri sunuyoruz:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Koruyucu Tedaviler:</strong>
                <ul class="list-[circle] list-inside ml-4 mt-2">
                    <li><strong>Fissür Örtücüler:</strong> Azı dişlerinin çiğneme yüzeylerindeki derin girintileri (fissürler) akışkan bir dolgu materyali ile kapatarak, bu bölgelerde yemek artığı birikimini ve çürük oluşumunu engeller.</li>
                    <li><strong>Florür Uygulamaları:</strong> Diş minesini güçlendirerek çürüklere karşı direncini artıran, ağrısız ve basit bir işlemdir.</li>
                </ul>
            </li>
            <li><strong>Süt Dişi Tedavileri:</strong> "Nasılsa düşecek" diye düşünülmemelidir. Süt dişlerindeki çürüklerin tedavisi, çocuğun beslenmesini, konuşmasını, estetiğini ve alttan gelecek daimi dişin sağlığı ile yerinin korunmasını sağlar. Bu amaçla süt dişi dolguları ve kanal tedavileri yapılır.</li>
            <li><strong>Yer Tutucular:</strong> Erken kaybedilen bir süt dişinin yerini, alttan gelecek daimi diş sürene kadar koruyan, komşu dişlerin bu boşluğa kaymasını önleyen basit apareylerdir.</li>
            <li><strong>Ağız Hijyeni Eğitimi ve Beslenme Danışmanlığı:</strong> Hem çocuğa hem de ebeveynlere yaşa uygun doğru fırçalama tekniği ve diş sağlığını koruyan beslenme alışkanlıkları hakkında bilgi verilir.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Çocuğumu ilk diş hekimi kontrolüne ne zaman getirmeliyim?</summary>
            <div class="faq-answer"><p>İlk diş hekimi ziyaretinin, ilk süt dişi çıktıktan sonraki 6 ay içinde veya en geç 1 yaşına kadar yapılması önerilir. Bu erken tanışma, olası sorunları önlemek ve çocuğun hekimle pozitif bir ilişki kurması için önemlidir.</p></div>
        </details>
        <details class="faq-item">
            <summary>Fissür örtücü işlemi ağrılı mıdır?</summary>
            <div class="faq-answer"><p>Hayır, kesinlikle ağrısız bir işlemdir. Dişten herhangi bir aşındırma yapılmaz. Sadece diş yüzeyi temizlenir ve akışkan dolgu materyali uygulanır.</p></div>
        </details>
        <details class="faq-item">
            <summary>Çocuğumun diş hekimi korkusunu yenmesi için ne yapabilirim?</summary>
            <div class="faq-answer"><p>Ziyaret öncesi "iğne, acı, korkma" gibi olumsuz kelimeler kullanmaktan kaçının. Ziyareti oyun gibi anlatın. Kliniğimizdeki hekimlerimiz, çocuk psikolojisi konusunda deneyimli olup, onlarla iletişim kurarak ve süreci anlatarak korkularını yenmelerine yardımcı olurlar.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Pedodontics?</h2>
        <p class="mb-4">Pedodontics (Pediatric Dentistry) is a specialty of dentistry that aims to protect the health of primary and permanent teeth of infants, children, and adolescents aged 0-14, treat problems like cavities and trauma, and most importantly, help them develop oral care as a habit without fear of the dentist.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Services We Offer in Pediatric Dentistry</h3>
        <p class="mb-4">A positive first dental experience for your child lays the foundation for a lifelong healthy smile. At our clinic, we offer the following services in an environment where children feel comfortable and safe:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Preventive Treatments:</strong>
                <ul class="list-[circle] list-inside ml-4 mt-2">
                    <li><strong>Fissure Sealants:</strong> Prevents cavity formation by sealing the deep grooves (fissures) on the chewing surfaces of molars with a flowable filling material, preventing food debris accumulation.</li>
                    <li><strong>Fluoride Applications:</strong> A painless and simple procedure that strengthens tooth enamel and increases its resistance to cavities.</li>
                </ul>
            </li>
            <li><strong>Primary Tooth Treatments:</strong> It should not be thought, "it will fall out anyway." Treating cavities in primary teeth ensures the child's nutrition, speech, aesthetics, and protects the health and space for the permanent tooth underneath. For this, primary tooth fillings and root canals are performed.</li>
            <li><strong>Space Maintainers:</strong> Simple appliances that preserve the space of a prematurely lost primary tooth until the permanent tooth erupts, preventing adjacent teeth from shifting into the gap.</li>
            <li><strong>Oral Hygiene Education and Nutritional Counseling:</strong> Both the child and parents are given information on age-appropriate proper brushing techniques and dietary habits that protect dental health.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>When should I bring my child for their first dental check-up?</summary>
            <div class="faq-answer"><p>The first dental visit is recommended within 6 months after the first primary tooth erupts, or by age 1 at the latest. This early introduction is important to prevent potential problems and for the child to build a positive relationship with the dentist.</p></div>
        </details>
        <details class="faq-item">
            <summary>Is the fissure sealant procedure painful?</summary>
            <div class="faq-answer"><p>No, it is a completely painless procedure. No drilling is done on the tooth. The tooth surface is simply cleaned, and the flowable filling material is applied.</p></div>
        </details>
        <details class="faq-item">
            <summary>What can I do to help my child overcome their fear of the dentist?</summary>
            <div class="faq-answer"><p>Avoid using negative words like "needle, pain, don't be scared" before the visit. Describe the visit as a game. Our dentists are experienced in child psychology and help them overcome their fears by communicating with them and explaining the process.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Pädodontie?</h2>
        <p class="mb-4">Die Pädodontie (Kinderzahnheilkunde) ist ein Spezialgebiet der Zahnmedizin, das darauf abzielt, die Gesundheit der Milch- und bleibenden Zähne von Säuglingen, Kindern und Jugendlichen im Alter von 0-14 Jahren zu schützen, Probleme wie Karies und Traumata zu behandeln und vor allem ihnen zu helfen, die Mundpflege ohne Angst vor dem Zahnarzt zur Gewohnheit zu machen.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Dienstleistungen in der Kinderzahnheilkunde</h3>
        <p class="mb-4">Eine positive erste zahnärztliche Erfahrung für Ihr Kind legt den Grundstein für ein lebenslanges gesundes Lächeln. In unserer Klinik bieten wir folgende Dienstleistungen in einer Umgebung, in der sich Kinder wohl und sicher fühlen:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Präventive Behandlungen:</strong>
                <ul class="list-[circle] list-inside ml-4 mt-2">
                    <li><strong>Fissurenversiegelung:</strong> Verhindert die Bildung von Karies, indem die tiefen Rillen (Fissuren) auf den Kauflächen der Backenzähne mit einem fließfähigen Füllungsmaterial versiegelt werden, was die Ansammlung von Speiseresten verhindert.</li>
                    <li><strong>Fluoridanwendungen:</strong> Ein schmerzloser und einfacher Eingriff, der den Zahnschmelz stärkt und seine Widerstandsfähigkeit gegen Karies erhöht.</li>
                </ul>
            </li>
            <li><strong>Milchzahnbehandlungen:</strong> Man sollte nicht denken, "er fällt sowieso aus". Die Behandlung von Karies in Milchzähnen sichert die Ernährung, Sprache und Ästhetik des Kindes und schützt die Gesundheit und den Platz für den darunter liegenden bleibenden Zahn. Zu diesem Zweck werden Milchzahnfüllungen und Wurzelkanäle durchgeführt.</li>
            <li><strong>Platzhalter:</strong> Einfache Apparaturen, die den Platz eines vorzeitig verlorenen Milchzahnes erhalten, bis der bleibende Zahn durchbricht, und verhindern, dass benachbarte Zähne in die Lücke wandern.</li>
            <li><strong>Mundhygieneerziehung und Ernährungsberatung:</strong> Sowohl das Kind als auch die Eltern erhalten Informationen über altersgerechte richtige Putztechniken und Ernährungsgewohnheiten, die die Zahngesundheit schützen.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Wann sollte ich mein Kind zur ersten zahnärztlichen Untersuchung bringen?</summary>
            <div class="faq-answer"><p>Der erste Zahnarztbesuch wird innerhalb von 6 Monaten nach dem Durchbruch des ersten Milchzahnes oder spätestens bis zum 1. Lebensjahr empfohlen. Diese frühe Vorstellung ist wichtig, um mögliche Probleme zu vermeiden und damit das Kind eine positive Beziehung zum Zahnarzt aufbaut.</p></div>
        </details>
        <details class="faq-item">
            <summary>Ist die Fissurenversiegelung schmerzhaft?</summary>
            <div class="faq-answer"><p>Nein, es ist ein völlig schmerzfreier Eingriff. Am Zahn wird nicht gebohrt. Die Zahnoberfläche wird lediglich gereinigt und das fließfähige Füllungsmaterial aufgetragen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Was kann ich tun, damit mein Kind seine Angst vor dem Zahnarzt überwindet?</summary>
            <div class="faq-answer"><p>Vermeiden Sie vor dem Besuch negative Wörter wie "Spritze, Schmerz, keine Angst". Beschreiben Sie den Besuch als ein Spiel. Unsere Zahnärzte sind in der Kinderpsychologie erfahren und helfen ihnen, ihre Ängste zu überwinden, indem sie mit ihnen kommunizieren und den Prozess erklären.</p></div>
        </details>`
    },
    icon: React.createElement(UserGroupIcon),
    imageUrl: 'https://i.imgur.com/B1b9kjm.jpg',
    relatedDoctorIds: ['dt-busra-beyhan', 'dt-umut-kocaoglan'],
  },
  {
    id: 'periodontoloji',
    name: { tr: 'Periodontoloji (Diş Eti Hastalıkları)', en: 'Periodontology (Gum Diseases)', de: 'Parodontologie (Zahnfleischerkrankungen)' },
    category: { tr: 'Koruyucu ve Pediatrik Diş Hekimliği', en: 'Preventive and Pediatric Dentistry', de: 'Präventive und pädiatrische Zahnheilkunde' },
    description: {
      tr: 'Diş eti kanaması ve çekilmesi gibi sorunlara yönelik diş taşı temizliği, küretaj ve cerrahi tedavilerle dişlerinizi koruyoruz.',
      en: 'We protect your teeth with tartar cleaning, curettage, and surgical treatments for problems such as gum bleeding and recession.',
      de: 'Wir schützen Ihre Zähne mit Zahnsteinentfernung, Kürettage und chirurgischen Behandlungen bei Problemen wie Zahnfleischbluten und -rückgang.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Periodontoloji Nedir?</h2>
        <p class="mb-4">Periodontoloji, dişleri çevreleyen ve destekleyen dokuların (diş eti, çene kemiği, periodontal ligament) hastalıklarını teşhis ve tedavi eden diş hekimliği uzmanlık dalıdır. Bu hastalıklar, tedavi edilmediğinde diş kaybına yol açabilen ciddi sağlık sorunlarıdır.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Diş Eti Hastalıklarının Evreleri ve Belirtileri</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
          <li><strong>Gingivitis:</strong> Hastalığın en erken ve en hafif evresidir. Diş etlerinde kızarıklık, şişlik ve fırçalama sırasında kanama ile kendini gösterir. Bu evre, iyi bir ağız hijyeni ve profesyonel diş temizliği ile tamamen geri döndürülebilir.</li>
          <li><strong>Periodontitis:</strong> Gingivitis tedavi edilmediğinde ilerleyerek periodontitise dönüşür. Bu evrede iltihap, diş etinin altındaki kemik dokusuna yayılır ve yıkıma neden olur. Belirtileri arasında diş eti çekilmesi, dişler ve diş etleri arasında "cep" adı verilen boşlukların oluşması, kötü ağız kokusu, dişlerde sallanma ve yer değiştirme bulunur.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Tedavi Yöntemleri</h3>
        <p class="mb-4">Tedavi, hastalığın evresine göre planlanır:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Diş Taşı Temizliği (Detertraj ve Polisaj):</strong> Gingivitis tedavisinin temelidir. Diş yüzeyindeki ve diş eti çizgisinin hemen altındaki plak ve tartar birikintileri temizlenir.</li>
            <li><strong>Küretaj (Kök Yüzeyi Düzleştirme):</strong> Periodontitis vakalarında, diş etinin altındaki ceplerin içinde ve kök yüzeylerindeki tartar ve iltihaplı dokuların temizlenmesi işlemidir. Lokal anestezi altında yapılır.</li>
            <li><strong>Flap Operasyonu:</strong> İlerlemiş periodontitis vakalarında, diş etinin cerrahi olarak kaldırılarak kök yüzeylerine ve kemik dokusuna direkt ulaşım sağlanır. Derin temizlik yapılır, gerekirse kemik düzeltmeleri veya kemik tozu uygulamaları (greftleme) yapılır ve diş eti tekrar dikilir.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h3>
        <details class="faq-item">
            <summary>Diş eti hastalığı bulaşıcı mıdır?</summary>
            <div class="faq-answer"><p>Diş eti hastalığına neden olan bakteriler öpüşme veya ortak çatal-kaşık kullanımı gibi yollarla bulaşabilir, ancak hastalığın gelişmesi kişinin kendi ağız hijyenine ve bağışıklık sistemine bağlıdır.</p></div>
        </details>
        <details class="faq-item">
            <summary>Diş eti çekilmesi tedavi edilebilir mi?</summary>
            <div class="faq-answer"><p>Çekilmenin ilerlemesi durdurulabilir. İleri vakalarda, estetik veya hassasiyet sorunlarını gidermek için "diş eti greftlemesi" gibi cerrahi operasyonlarla çekilen diş eti bir miktar kapatılabilir.</p></div>
        </details>
        `,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Periodontology?</h2>
        <p class="mb-4">Periodontology is a specialty of dentistry that diagnoses and treats diseases of the tissues surrounding and supporting the teeth (gums, jawbone, periodontal ligament). These diseases are serious health problems that can lead to tooth loss if left untreated.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Stages and Symptoms of Gum Disease</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
          <li><strong>Gingivitis:</strong> This is the earliest and mildest stage of the disease. It manifests as redness, swelling, and bleeding of the gums during brushing. This stage is completely reversible with good oral hygiene and professional dental cleaning.</li>
          <li><strong>Periodontitis:</strong> If gingivitis is not treated, it can progress to periodontitis. At this stage, the inflammation spreads to the bone tissue beneath the gums, causing destruction. Symptoms include gum recession, the formation of "pockets" between the teeth and gums, bad breath, and loose or shifting teeth.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Treatment Methods</h3>
        <p class="mb-4">Treatment is planned according to the stage of the disease:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Teeth Cleaning (Scaling and Polishing):</strong> This is the foundation of gingivitis treatment. Plaque and tartar deposits on the tooth surface and just below the gum line are removed.</li>
            <li><strong>Curettage (Root Planing):</strong> In cases of periodontitis, this procedure involves cleaning tartar and inflamed tissue from within the pockets under the gums and on the root surfaces. It is performed under local anesthesia.</li>
            <li><strong>Flap Surgery:</strong> In advanced cases of periodontitis, the gum is surgically lifted to provide direct access to the root surfaces and bone tissue. Deep cleaning is performed, bone reshaping or bone grafting may be done if necessary, and the gum is stitched back.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h3>
        <details class="faq-item">
            <summary>Is gum disease contagious?</summary>
            <div class="faq-answer"><p>The bacteria that cause gum disease can be transmitted through ways like kissing or sharing utensils, but the development of the disease depends on the individual's own oral hygiene and immune system.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can gum recession be treated?</summary>
            <div class="faq-answer"><p>The progression of recession can be stopped. In advanced cases, the receded gum can be partially covered with surgical procedures like "gum grafting" to address aesthetic or sensitivity issues.</p></div>
        </details>
        `,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Parodontologie?</h2>
        <p class="mb-4">Die Parodontologie ist ein Spezialgebiet der Zahnmedizin, das Krankheiten der Gewebe diagnostiziert und behandelt, die die Zähne umgeben und stützen (Zahnfleisch, Kieferknochen, Parodontalligament). Diese Krankheiten sind ernsthafte Gesundheitsprobleme, die unbehandelt zu Zahnverlust führen können.</p>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Stadien und Symptome von Zahnfleischerkrankungen</h3>
        <ul class="list-disc list-inside space-y-3 mb-4">
          <li><strong>Gingivitis:</strong> Dies ist das früheste und mildeste Stadium der Krankheit. Sie äußert sich durch Rötung, Schwellung und Bluten des Zahnfleisches beim Zähneputzen. Dieses Stadium ist mit guter Mundhygiene und professioneller Zahnreinigung vollständig reversibel.</li>
          <li><strong>Parodontitis:</strong> Wenn Gingivitis nicht behandelt wird, kann sie sich zu Parodontitis entwickeln. In diesem Stadium breitet sich die Entzündung auf das Knochengewebe unter dem Zahnfleisch aus und verursacht Zerstörung. Symptome sind Zahnfleischrückgang, die Bildung von "Taschen" zwischen Zähnen und Zahnfleisch, Mundgeruch und lockere oder wandernde Zähne.</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Behandlungsmethoden</h3>
        <p class="mb-4">Die Behandlung wird je nach Stadium der Krankheit geplant:</p>
        <ol class="list-decimal list-inside space-y-3 mb-4">
            <li><strong>Zahnsteinentfernung (Scaling und Polieren):</strong> Dies ist die Grundlage der Gingivitis-Behandlung. Plaque- und Zahnsteinablagerungen auf der Zahnoberfläche und knapp unterhalb des Zahnfleischrandes werden entfernt.</li>
            <li><strong>Kürettage (Wurzelglättung):</strong> Bei Parodontitis werden bei diesem Verfahren Zahnstein und entzündetes Gewebe aus den Taschen unter dem Zahnfleisch und auf den Wurzeloberflächen entfernt. Es wird unter örtlicher Betäubung durchgeführt.</li>
            <li><strong>Lappenoperation:</strong> In fortgeschrittenen Fällen von Parodontitis wird das Zahnfleisch chirurgisch angehoben, um direkten Zugang zu den Wurzeloberflächen und dem Knochengewebe zu erhalten. Eine Tiefenreinigung wird durchgeführt, bei Bedarf können Knochenumformungen oder Knochentransplantationen vorgenommen werden, und das Zahnfleisch wird wieder angenäht.</li>
        </ol>

        <h3 class="text-xl font-semibold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h3>
        <details class="faq-item">
            <summary>Ist Zahnfleischerkrankung ansteckend?</summary>
            <div class="faq-answer"><p>Die Bakterien, die Zahnfleischerkrankungen verursachen, können durch Küssen oder gemeinsames Besteck übertragen werden, aber die Entwicklung der Krankheit hängt von der eigenen Mundhygiene und dem Immunsystem des Einzelnen ab.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann Zahnfleischrückgang behandelt werden?</summary>
            <div class="faq-answer"><p>Das Fortschreiten des Rückgangs kann gestoppt werden. In fortgeschrittenen Fällen kann das zurückgegangene Zahnfleisch teilweise mit chirurgischen Eingriffen wie einer "Zahnfleischtransplantation" abgedeckt werden, um ästhetische oder Empfindlichkeitsprobleme zu beheben.</p></div>
        </details>
        `
    },
    icon: React.createElement(HeartIcon),
    imageUrl: 'https://i.imgur.com/BDBCIZj.jpg',
    relatedDoctorIds: ['dt-burak-senol', 'dt-furkan-emre-yildiz'],
  },
];
