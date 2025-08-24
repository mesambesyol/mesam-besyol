
import { QuizQuestion, QuizResultLevel } from '../types';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: {
      tr: 'İnsan vücudundaki en sert doku hangisidir?',
      en: 'Which is the hardest tissue in the human body?',
      de: 'Welches ist das härteste Gewebe im menschlichen Körper?',
    },
    options: [
      { tr: 'Kafatası kemiği', en: 'Skull bone', de: 'Schädelknochen' },
      { tr: 'Diş minesi', en: 'Tooth enamel', de: 'Zahnschmelz' },
      { tr: 'Uyluk kemiği', en: 'Femur', de: 'Oberschenkelknochen' },
      { tr: 'Tırnak', en: 'Fingernail', de: 'Fingernagel' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Diş minesi, %96\'dan fazlası mineralden oluşan yapısıyla insan vücudunda bulunan en sert ve en yüksek oranda mineralleşmiş dokudur. Bu yapı, dişlerimizi günlük çiğneme baskısına karşı korur.',
      en: 'Tooth enamel is the hardest and most highly mineralized tissue in the human body, with a structure composed of over 96% minerals. This structure protects our teeth against the daily pressure of chewing.',
      de: 'Der Zahnschmelz ist mit seiner zu über 96% aus Mineralien bestehenden Struktur das härteste und am stärksten mineralisierte Gewebe im menschlichen Körper. Diese Struktur schützt unsere Zähne vor dem täglichen Kaudruck.',
    },
  },
  {
    id: 2,
    question: {
      tr: 'Diş çürümesinin temel bilimsel nedeni aşağıdakilerden hangisidir?',
      en: 'What is the primary scientific cause of tooth decay?',
      de: 'Was ist die primäre wissenschaftliche Ursache von Karies?',
    },
    options: [
      { tr: 'Şekerin diş minesine doğrudan zarar vermesi', en: 'Sugar directly damaging tooth enamel', de: 'Zucker schädigt den Zahnschmelz direkt' },
      { tr: 'Ağızdaki bakterilerin, gıda artığındaki şekeri kullanarak asit üretmesi', en: 'Bacteria in the mouth producing acid by using sugar from food debris', de: 'Bakterien im Mund produzieren Säure durch die Verwendung von Zucker aus Speiseresten' },
      { tr: 'Çok sert yiyeceklerin dişlerde mikro çatlaklar oluşturması', en: 'Very hard foods creating micro-cracks in the teeth', de: 'Sehr harte Lebensmittel erzeugen Mikrorisse in den Zähnen' },
      { tr: 'Genetik olarak zayıf diş yapısına sahip olmak', en: 'Having a genetically weak tooth structure', de: 'Eine genetisch schwache Zahnstruktur haben' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Diş çürüğü, tek başına şeker yüzünden olmaz. Ağızda yaşayan bakteriler, özellikle şekerli ve karbonhidratlı gıda artıklarıyla beslenirler. Bu beslenme sonucunda ortaya çıkan asit, diş minesindeki mineralleri çözerek çürüğü başlatır.',
      en: 'Tooth decay is not caused by sugar alone. Bacteria living in the mouth feed on food debris, especially sugary and carbohydrate-rich ones. The acid produced as a result of this feeding dissolves the minerals in the tooth enamel, initiating decay.',
      de: 'Karies wird nicht allein durch Zucker verursacht. Bakterien im Mund ernähren sich von Speiseresten, insbesondere von zucker- und kohlenhydratreichen. Die dabei entstehende Säure löst die Mineralien im Zahnschmelz auf und leitet so Karies ein.',
    },
  },
    {
    id: 3,
    question: {
      tr: 'Dişleri fırçalarken görülen diş eti kanaması genellikle neyin habercisidir?',
      en: 'What does gum bleeding while brushing usually indicate?',
      de: 'Was bedeutet Zahnfleischbluten beim Zähneputzen normalerweise?',
    },
    options: [
      { tr: 'Dişlerin çok temiz olduğunun', en: 'That the teeth are very clean', de: 'Dass die Zähne sehr sauber sind' },
      { tr: 'Fırçanın çok sert olduğunun ve daha nazik fırçalamak gerektiğinin', en: 'That the brush is too hard and you need to brush more gently', de: 'Dass die Bürste zu hart ist und man sanfter putzen muss' },
      { tr: '"Gingivitis" olarak bilinen diş eti iltihabının başlangıcının', en: 'The beginning of gum inflammation known as "gingivitis"', de: 'Der Beginn einer Zahnfleischentzündung, bekannt als "Gingivitis"' },
      { tr: 'Vücudun demir fazlalığının', en: 'An excess of iron in the body', de: 'Ein Eisenüberschuss im Körper' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Sağlıklı diş eti kanamaz. Genellikle kanamanın sebebi, diş yüzeyinde biriken ve iltihaba yol açan bakteri plağıdır. Kanama, vücudun bu iltihapla savaştığının bir işaretidir ve daha etkin bir ağız bakımı gerektiğini gösterir.',
      en: 'Healthy gums do not bleed. The cause of bleeding is usually bacterial plaque that has accumulated on the tooth surface, leading to inflammation. Bleeding is a sign that the body is fighting this inflammation and indicates that more effective oral care is needed.',
      de: 'Gesundes Zahnfleisch blutet nicht. Die Ursache für das Bluten ist in der Regel bakterieller Zahnbelag, der sich auf der Zahnoberfläche angesammelt hat und zu Entzündungen führt. Das Bluten ist ein Zeichen dafür, dass der Körper diese Entzündung bekämpft und eine effektivere Mundpflege erforderlich ist.',
    },
  },
  {
    id: 4,
    question: {
      tr: 'Özellikle asitli bir şeyler yiyip içtikten sonra dişleri fırçalamak için neden bir süre beklemek tavsiye edilir?',
      en: 'Why is it recommended to wait a while before brushing your teeth, especially after eating or drinking something acidic?',
      de: 'Warum wird empfohlen, nach dem Verzehr von sauren Speisen oder Getränken eine Weile mit dem Zähneputzen zu warten?',
    },
    options: [
      { tr: 'Mide asitlerinin ağza geri gelmesini önlemek için', en: 'To prevent stomach acids from coming back up into the mouth', de: 'Um zu verhindern, dass Magensäure in den Mund zurückfließt' },
      { tr: 'Asitlerin etkisiyle geçici olarak yumuşayan diş minesine fırçalayarak zarar vermemek için', en: 'To avoid damaging the tooth enamel that has been temporarily softened by the effects of acid', de: 'Um den durch Säure vorübergehend aufgeweichten Zahnschmelz nicht durch Bürsten zu beschädigen' },
      { tr: 'Tükürüğün asitleri tamamen temizlemesine zaman tanımak için', en: 'To give saliva time to completely clear the acids', de: 'Um dem Speichel Zeit zu geben, die Säuren vollständig zu neutralisieren' },
      { tr: 'Beklemeye gerek yoktur, hemen fırçalamak en iyisidir', en: 'There is no need to wait, brushing immediately is best', de: 'Es ist nicht nötig zu warten, sofortiges Putzen ist am besten' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Portakal suyu, gazlı içecekler gibi asitli gıdalar tüketildiğinde, diş minesi geçici olarak yumuşar. Bu durumda hemen fırçalamak, yumuşamış mine yüzeyinin aşınmasına (erozyon) neden olabilir. Yaklaşık 30 dakika beklemek, tükürüğün asidi nötralize etmesine ve minenin tekrar sertleşmesine olanak tanır.',
      en: 'When acidic foods like orange juice or carbonated drinks are consumed, the tooth enamel temporarily softens. Brushing immediately in this state can cause erosion of the softened enamel surface. Waiting about 30 minutes allows saliva to neutralize the acid and the enamel to reharden.',
      de: 'Wenn säurehaltige Lebensmittel wie Orangensaft oder kohlensäurehaltige Getränke konsumiert werden, weicht der Zahnschmelz vorübergehend auf. Sofortiges Zähneputzen in diesem Zustand kann zur Erosion der aufgeweichten Schmelzoberfläche führen. Etwa 30 Minuten zu warten, ermöglicht es dem Speichel, die Säure zu neutralisieren und dem Schmelz, wieder auszuhärten.',
    },
  },
  {
    id: 5,
    question: {
      tr: 'Sadece diş fırçalamak, diş yüzeylerinin yaklaşık yüzde kaçını temizler?',
      en: 'Brushing alone cleans approximately what percentage of the tooth surfaces?',
      de: 'Wie viel Prozent der Zahnoberflächen reinigt das Zähneputzen allein ungefähr?',
    },
    options: [
      { tr: '%100', en: '100%', de: '100%' },
      { tr: '%85', en: '85%', de: '85%' },
      { tr: '%60', en: '60%', de: '60%' },
      { tr: '%40', en: '40%', de: '40%' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Diş fırçalamak ağız bakımının temel taşı olsa da, sadece dişlerin ön, arka ve üst yüzeylerine ulaşabilir. Dişlerin birbirine bakan ve diş eti ile birleşen ara yüzeyleri, toplam yüzeyin yaklaşık %40\'ını oluşturur ve bu bölgeler ancak diş ipi veya ara yüz fırçaları ile etkin bir şekilde temizlenebilir.',
      en: 'Although brushing is the cornerstone of oral care, it can only reach the front, back, and top surfaces of the teeth. The surfaces between the teeth, where they touch each other and meet the gum line, make up about 40% of the total surface area and can only be effectively cleaned with floss or interdental brushes.',
      de: 'Obwohl das Zähneputzen der Grundpfeiler der Mundpflege ist, kann es nur die Vorder-, Rück- und Oberseite der Zähne erreichen. Die Zwischenräume der Zähne, wo sie sich berühren und auf das Zahnfleisch treffen, machen etwa 40% der gesamten Oberfläche aus und können nur mit Zahnseide oder Interdentalbürsten effektiv gereinigt werden.',
    },
  },
  {
    id: 6,
    question: {
      tr: 'Diş minesi, başlangıç aşamasındaki küçük mineral kayıplarını hangi mekanizmayla kendi kendine onarabilir?',
      en: 'By what mechanism can tooth enamel repair minor mineral loss in its initial stages?',
      de: 'Durch welchen Mechanismus kann der Zahnschmelz geringfügigen Mineralverlust in den Anfangsstadien selbst reparieren?',
    },
    options: [
      { tr: 'Vücudun yeni mine hücreleri üretmesiyle', en: 'By the body producing new enamel cells', de: 'Indem der Körper neue Schmelzzellen produziert' },
      { tr: 'Dilin yüzeyi temizleyerek mineral biriktirmesiyle', en: 'By the tongue cleaning the surface and depositing minerals', de: 'Indem die Zunge die Oberfläche reinigt und Mineralien ablagert' },
      { tr: 'Tükürükteki kalsiyum ve fosfat mineralleri sayesinde (Remineralizasyon)', en: 'Thanks to the calcium and phosphate minerals in saliva (Remineralization)', de: 'Dank der Kalzium- und Phosphatmineralien im Speichel (Remineralisierung)' },
      { tr: 'Bu tür bir onarım mümkün değildir', en: 'This type of repair is not possible', de: 'Diese Art der Reparatur ist nicht möglich' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Tükürük, sadece bir ıslatıcı sıvı değildir; aynı zamanda kalsiyum ve fosfat gibi değerli mineraller içerir. Asit ataklarından sonra, tükürük bu mineralleri diş minesine geri taşıyarak "remineralizasyon" adı verilen doğal bir onarım süreci başlatır. Florür, bu süreci hızlandırır ve destekler.',
      en: 'Saliva is not just a wetting agent; it also contains valuable minerals like calcium and phosphate. After acid attacks, saliva transports these minerals back to the tooth enamel, initiating a natural repair process called "remineralization." Fluoride accelerates and supports this process.',
      de: 'Speichel ist nicht nur ein Benetzungsmittel; er enthält auch wertvolle Mineralien wie Kalzium und Phosphat. Nach Säureangriffen transportiert der Speichel diese Mineralien zurück zum Zahnschmelz und leitet einen natürlichen Reparaturprozess namens "Remineralisierung" ein. Fluorid beschleunigt und unterstützt diesen Prozess.',
    },
  },
  {
    id: 7,
    question: {
      tr: 'Bir bebeğin süt dişleri ne zaman oluşmaya başlar?',
      en: 'When do a baby\'s primary (milk) teeth begin to form?',
      de: 'Wann beginnen sich die Milchzähne eines Babys zu bilden?',
    },
    options: [
      { tr: 'Doğumdan hemen sonra', en: 'Immediately after birth', de: 'Unmittelbar nach der Geburt' },
      { tr: 'Anne karnındayken', en: 'In the womb', de: 'Im Mutterleib' },
      { tr: '6 aylıkken', en: 'At 6 months old', de: 'Mit 6 Monaten' },
      { tr: '1 yaşındayken', en: 'At 1 year old', de: 'Mit 1 Jahr' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Süt dişlerinin tomurcukları, bebek henüz anne karnındayken, gebeliğin yaklaşık 6. haftasından itibaren oluşmaya başlar. Doğumda bu dişler çene kemiğinin içinde gelişimlerini sürdürür ve zamanı gelince diş etinden sürerler.',
      en: 'The buds of the primary teeth begin to form while the baby is still in the womb, starting from about the 6th week of pregnancy. At birth, these teeth continue to develop inside the jawbone and erupt through the gums when the time comes.',
      de: 'Die Knospen der Milchzähne beginnen sich zu bilden, während das Baby noch im Mutterleib ist, etwa ab der 6. Schwangerschaftswoche. Bei der Geburt entwickeln sich diese Zähne im Kieferknochen weiter und brechen zu gegebener Zeit durch das Zahnfleisch.',
    },
  },
  {
    id: 8,
    question: {
      tr: 'Diş fırçasıyla temizlenemeyen ve profesyonel diş temizliği gerektiren sertleşmiş bakteri plağına ne ad verilir?',
      en: 'What is the name for hardened bacterial plaque that cannot be removed by a toothbrush and requires professional dental cleaning?',
      de: 'Wie nennt man verhärteten bakteriellen Zahnbelag, der nicht mit einer Zahnbürste entfernt werden kann und eine professionelle Zahnreinigung erfordert?',
    },
    options: [
      { tr: 'Biyofilm', en: 'Biofilm', de: 'Biofilm' },
      { tr: 'Diş taşı (Tartar)', en: 'Tartar (Calculus)', de: 'Zahnstein (Tartarus)' },
      { tr: 'Mine lekesi', en: 'Enamel stain', de: 'Schmelzfleck' },
      { tr: 'Aft', en: 'Canker sore', de: 'Aphthe' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Bakteri plağı, düzenli fırçalama ile temizlenmediğinde tükürükteki minerallerle birleşerek sertleşir ve diş taşına (tartar) dönüşür. Diş taşı, pürüzlü yüzeyi nedeniyle daha fazla plak birikimine neden olur ve sadece diş hekimleri tarafından özel aletlerle temizlenebilir.',
      en: 'When bacterial plaque is not removed by regular brushing, it combines with minerals in saliva, hardens, and turns into tartar (calculus). Tartar, due to its rough surface, causes more plaque to accumulate and can only be removed by dental professionals using special tools.',
      de: 'Wenn bakterieller Zahnbelag nicht durch regelmäßiges Bürsten entfernt wird, verbindet er sich mit Mineralien im Speichel, verhärtet und wird zu Zahnstein (Tartarus). Zahnstein verursacht aufgrund seiner rauen Oberfläche eine stärkere Ansammlung von Plaque und kann nur von Zahnärzten mit speziellen Instrumenten entfernt werden.',
    },
  },
    {
    id: 9,
    question: {
      tr: 'Diş macunlarında bulunan florürün çürüğü önlemedeki en temel işlevi nedir?',
      en: 'What is the most fundamental function of fluoride in toothpaste in preventing cavities?',
      de: 'Was ist die grundlegendste Funktion von Fluorid in Zahnpasta zur Kariesprävention?',
    },
    options: [
      { tr: 'Bakterileri anında yok etmesi', en: 'Instantly killing bacteria', de: 'Bakterien sofort abzutöten' },
      { tr: 'Diş minesini asitlere karşı daha dirençli hale getirmesi', en: 'Making tooth enamel more resistant to acids', de: 'Den Zahnschmelz widerstandsfähiger gegen Säuren zu machen' },
      { tr: 'Diş yüzeyindeki lekeleri çıkarması', en: 'Removing stains from the tooth surface', de: 'Flecken von der Zahnoberfläche zu entfernen' },
      { tr: 'Ağız pH\'ını kalıcı olarak alkali yapması', en: 'Permanently making the mouth\'s pH alkaline', de: 'Den pH-Wert des Mundes dauerhaft alkalisch zu machen' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Florür, dişin yapısına katılarak minenin kristal yapısını güçlendirir. Bu sayede, bakterilerin ürettiği asitlere karşı dişin savunmasını artırır ve çürük oluşumunu zorlaştırır. Ayrıca remineralizasyon sürecini de destekler.',
      en: 'Fluoride incorporates into the tooth structure, strengthening the enamel\'s crystal structure. This increases the tooth\'s defense against acids produced by bacteria, making cavity formation more difficult. It also supports the remineralization process.',
      de: 'Fluorid wird in die Zahnstruktur eingebaut und stärkt die Kristallstruktur des Schmelzes. Dadurch wird die Abwehr des Zahnes gegen von Bakterien produzierte Säuren erhöht und die Kariesbildung erschwert. Es unterstützt auch den Remineralisierungsprozess.',
    },
  },
  {
    id: 10,
    question: {
      tr: '"Ağız kuruluğu" (xerostomia) durumunun diş çürüğü riskini artırmasının temel sebebi nedir?',
      en: 'What is the main reason why "dry mouth" (xerostomia) increases the risk of tooth decay?',
      de: 'Was ist der Hauptgrund, warum "Mundtrockenheit" (Xerostomie) das Kariesrisiko erhöht?',
    },
    options: [
      { tr: 'Dilin hareket kabiliyetini azaltması', en: 'It reduces the tongue\'s mobility', de: 'Es verringert die Beweglichkeit der Zunge' },
      { tr: 'Yiyeceklerin tadını almayı zorlaştırması', en: 'It makes it harder to taste food', de: 'Es erschwert das Schmecken von Speisen' },
      { tr: 'Asitleri nötralize eden ve dişleri temizleyen tükürüğün azalması', en: 'A decrease in saliva, which neutralizes acids and cleans teeth', de: 'Eine Abnahme des Speichels, der Säuren neutralisiert und die Zähne reinigt' },
      { tr: 'Doğrudan ağız kokusuna neden olması', en: 'It directly causes bad breath', de: 'Es verursacht direkt Mundgeruch' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Tükürük, ağzın doğal savunma mekanizmasıdır. Yiyecek artıklarını yıkar, asitleri nötralize eder ve içerdiği minerallerle dişleri onarır. Ağız kuruluğunda bu koruyucu etki azaldığı için çürük riski önemli ölçüde artar.',
      en: 'Saliva is the mouth\'s natural defense mechanism. It washes away food particles, neutralizes acids, and repairs teeth with the minerals it contains. In cases of dry mouth, this protective effect is diminished, significantly increasing the risk of cavities.',
      de: 'Speichel ist der natürliche Abwehrmechanismus des Mundes. Er spült Speisereste weg, neutralisiert Säuren und repariert Zähne mit den enthaltenen Mineralien. Bei Mundtrockenheit ist diese Schutzwirkung vermindert, was das Kariesrisiko erheblich erhöht.',
    },
  },
  {
    id: 11,
    question: {
      tr: 'Diş eti iltihabının (gingivitis) ilerleyerek dişleri destekleyen çene kemiğinde yıkıma yol açtığı ileri evre hastalığın adı nedir?',
      en: 'What is the name of the advanced stage disease where gum inflammation (gingivitis) progresses and leads to the destruction of the jawbone that supports the teeth?',
      de: 'Wie heißt die fortgeschrittene Krankheit, bei der eine Zahnfleischentzündung (Gingivitis) fortschreitet und zur Zerstörung des zahntragenden Kieferknochens führt?',
    },
    options: [
      { tr: 'Periodontitis', en: 'Periodontitis', de: 'Parodontitis' },
      { tr: 'Stomatit', en: 'Stomatitis', de: 'Stomatitis' },
      { tr: 'Lökoplaki', en: 'Leukoplakia', de: 'Leukoplakie' },
      { tr: 'Kandidiyazis', en: 'Candidiasis', de: 'Kandidose' },
    ],
    correctAnswerIndex: 0,
    explanation: {
      tr: 'Gingivitis, sadece diş etini etkileyen ve geri döndürülebilir bir iltihaptır. Tedavi edilmediğinde ise iltihap dişleri destekleyen kemik dokusuna ilerler. Bu duruma periodontitis denir ve kemik kaybına yol açarak dişlerin sallanıp kaybedilmesine neden olabilir.',
      en: 'Gingivitis is a reversible inflammation that affects only the gums. If left untreated, the inflammation progresses to the bone tissue supporting the teeth. This condition is called periodontitis and can lead to bone loss, causing teeth to loosen and eventually be lost.',
      de: 'Gingivitis ist eine reversible Entzündung, die nur das Zahnfleisch betrifft. Unbehandelt schreitet die Entzündung auf das den Zahn stützende Knochengewebe über. Dieser Zustand wird Parodontitis genannt und kann zu Knochenverlust führen, wodurch sich die Zähne lockern und schließlich verloren gehen können.',
    },
  },
  {
    id: 12,
    question: {
      tr: 'Genellikle uyku sırasında gerçekleşen diş sıkma veya gıcırdatma (bruksizm) alışkanlığının belirtilerinden biri hangisi değildir?',
      en: 'Which of the following is not a symptom of the habit of teeth grinding or clenching (bruxism), which usually occurs during sleep?',
      de: 'Welches der folgenden ist kein Symptom für die Gewohnheit des Zähneknirschens oder -pressens (Bruxismus), die normalerweise im Schlaf auftritt?',
    },
    options: [
      { tr: 'Dişlerde düzleşme ve aşınma', en: 'Flattening and wear of the teeth', de: 'Abflachung und Abnutzung der Zähne' },
      { tr: 'Sabahları çene ve baş ağrısı', en: 'Jaw and headaches in the morning', de: 'Kiefer- und Kopfschmerzen am Morgen' },
      { tr: 'Diş eti kanaması', en: 'Gum bleeding', de: 'Zahnfleischbluten' },
      { tr: 'Yanak içinde istemsiz ısırmaya bağlı beyaz çizgiler', en: 'White lines inside the cheek due to involuntary biting', de: 'Weiße Linien in der Wange durch unwillkürliches Beißen' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Bruksizm, dişlere ve çene eklemine aşırı yük bindirerek aşınmalara, ağrılara ve hatta diş kırıklarına neden olabilir. Ancak diş eti kanaması, genellikle bruksizmin değil, bakteri plağına bağlı diş eti iltihabının bir belirtisidir.',
      en: 'Bruxism can cause wear, pain, and even tooth fractures by putting excessive load on the teeth and jaw joint. However, gum bleeding is generally a symptom of gum inflammation due to bacterial plaque, not bruxism.',
      de: 'Bruxismus kann durch übermäßige Belastung der Zähne und des Kiefergelenks zu Abnutzung, Schmerzen und sogar Zahnfrakturen führen. Zahnfleischbluten ist jedoch in der Regel ein Symptom einer Zahnfleischentzündung aufgrund von bakteriellem Plaque, nicht von Bruxismus.',
    },
  },
  {
    id: 13,
    question: {
      tr: 'Sakızlarda ve bazı diş macunlarında bulunan "ksilitol" (xylitol) adlı doğal tatlandırıcının diş sağlığına en önemli katkısı nedir?',
      en: 'What is the most significant contribution to dental health of the natural sweetener "xylitol," found in gum and some toothpastes?',
      de: 'Was ist der wichtigste Beitrag des natürlichen Süßstoffs "Xylit", der in Kaugummi und einigen Zahnpasten enthalten ist, zur Zahngesundheit?',
    },
    options: [
      { tr: 'Diş minesini anında beyazlatması', en: 'Instantly whitening tooth enamel', de: 'Den Zahnschmelz sofort aufzuhellen' },
      { tr: 'Çürük yapan bakterilerin beslenmesini ve çoğalmasını engellemesi', en: 'Inhibiting the feeding and reproduction of cavity-causing bacteria', de: 'Die Ernährung und Vermehrung von kariesverursachenden Bakterien zu hemmen' },
      { tr: 'Tükürük üretimini azaltarak ağzı kuru tutması', en: 'Keeping the mouth dry by reducing saliva production', de: 'Den Mund durch Reduzierung der Speichelproduktion trocken zu halten' },
      { tr: 'Dişleri geçici olarak parlatması', en: 'Temporarily polishing the teeth', de: 'Die Zähne vorübergehend zu polieren' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Çürüğe neden olan bakteriler, normal şekeri kolayca sindirip asit üretirken, ksilitolü sindiremezler. Bu sayede bakterilerin enerji üretimi ve çoğalması engellenmiş olur, bu da çürük riskini azaltır.',
      en: 'While cavity-causing bacteria can easily digest regular sugar to produce acid, they cannot digest xylitol. This inhibits the bacteria\'s energy production and reproduction, which in turn reduces the risk of cavities.',
      de: 'Während kariesverursachende Bakterien normalen Zucker leicht verdauen und Säure produzieren können, können sie Xylit nicht verdauen. Dies hemmt die Energieproduktion und Vermehrung der Bakterien, was wiederum das Kariesrisiko verringert.',
    },
  },
  {
    id: 14,
    question: {
      tr: 'Özellikle bebeklerin üst ön dişlerinde görülen ve "biberon çürüğü" olarak adlandırılan durumun en yaygın nedeni nedir?',
      en: 'What is the most common cause of the condition known as "baby bottle tooth decay," especially seen on the upper front teeth of babies?',
      de: 'Was ist die häufigste Ursache für den als "Nuckelflaschenkaries" bekannten Zustand, der besonders an den oberen Vorderzähnen von Babys auftritt?',
    },
    options: [
      { tr: 'Çok sık emzik kullanmak', en: 'Using a pacifier too often', de: 'Zu häufigen Gebrauch eines Schnullers' },
      { tr: 'Bebeğin şekerli veya sütlü biberonla uykuya dalması', en: 'The baby falling asleep with a bottle of sugary liquid or milk', de: 'Das Baby schläft mit einer Flasche zuckerhaltiger Flüssigkeit oder Milch ein' },
      { tr: 'Yeterince su içmemesi', en: 'Not drinking enough water', de: 'Nicht genug Wasser trinken' },
      { tr: 'Dişlerinin normalden geç çıkması', en: 'Teeth erupting later than normal', de: 'Zähne brechen später als normal durch' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Bebek, içinde süt, mama veya meyve suyu gibi şekerli sıvılar bulunan bir biberonla uyuduğunda, bu sıvılar gece boyunca dişlerin etrafında birikir. Uykuda tükürük akışı azaldığı için dişler temizlenemez ve bu durum hızla yayılan çürüklere neden olur.',
      en: 'When a baby sleeps with a bottle containing sugary liquids like milk, formula, or fruit juice, these liquids pool around the teeth throughout the night. Since saliva flow decreases during sleep, the teeth are not cleaned, leading to rapidly spreading cavities.',
      de: 'Wenn ein Baby mit einer Flasche mit zuckerhaltigen Flüssigkeiten wie Milch, Säuglingsnahrung oder Fruchtsaft schläft, sammeln sich diese Flüssigkeiten über Nacht um die Zähne. Da der Speichelfluss im Schlaf abnimmt, werden die Zähne nicht gereinigt, was zu sich schnell ausbreitender Karies führt.',
    },
  },
  {
    id: 15,
    question: {
      tr: 'Çiğneme sırasında aniden ortaya çıkan keskin bir ağrıya neden olan ancak gözle görülmesi zor olabilen diş rahatsızlığı hangisidir?',
      en: 'Which dental condition can cause a sudden, sharp pain upon chewing but is often difficult to see with the naked eye?',
      de: 'Welcher Zahnzustand kann beim Kauen einen plötzlichen, stechenden Schmerz verursachen, ist aber oft mit bloßem Auge schwer zu erkennen?',
    },
    options: [
      { tr: 'Apse', en: 'Abscess', de: 'Abszess' },
      { tr: 'Gömülü yirmi yaş dişi', en: 'Impacted wisdom tooth', de: 'Impaktierter Weisheitszahn' },
      { tr: 'Çatlak diş sendromu', en: 'Cracked tooth syndrome', de: 'Syndrom des gesprungenen Zahnes' },
      { tr: 'Genel diş hassasiyeti', en: 'General tooth sensitivity', de: 'Allgemeine Zahnempfindlichkeit' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Çatlak diş sendromu, genellikle dişte gözle görülmesi zor, mikroskobik bir çatlağın bulunması durumudur. Çiğneme sırasında çatlak hatları birbirinden ayrıldığında veya tekrar birleştiğinde anlık, keskin bir ağrıya neden olabilir.',
      en: 'Cracked tooth syndrome is a condition where there is a microscopic crack in the tooth that is often difficult to see. It can cause a sharp, momentary pain when the crack lines separate or come back together during chewing.',
      de: 'Das Syndrom des gesprungenen Zahnes ist ein Zustand, bei dem ein mikroskopisch kleiner Riss im Zahn vorhanden ist, der oft schwer zu sehen ist. Es kann einen scharfen, kurzzeitigen Schmerz verursachen, wenn sich die Risslinien beim Kauen trennen oder wieder zusammenkommen.',
    },
  },
];


export const QUIZ_RESULTS: { [key: string]: QuizResultLevel } = {
  level1: {
    title: { tr: "Meraklı Kaşif!", en: "Curious Explorer!", de: "Neugieriger Entdecker!" },
    text: {
      tr: "Ağız ve diş sağlığının büyüleyici dünyasına harika bir giriş yaptınız! Öğrendiğiniz her yeni bilgi, daha sağlıklı bir gülümseme için attığınız değerli bir adımdır. Merak etmeye ve öğrenmeye devam edin!",
      en: "You've made a great start into the fascinating world of oral and dental health! Every new piece of information you learn is a valuable step towards a healthier smile. Keep being curious and keep learning!",
      de: "Sie haben einen großartigen Start in die faszinierende Welt der Mund- und Zahngesundheit gemacht! Jede neue Information, die Sie lernen, ist ein wertvoller Schritt zu einem gesünderen Lächeln. Bleiben Sie neugierig und lernen Sie weiter!",
    },
  },
  level2: {
    title: { tr: "Bilinçli Bakım Uzmanı!", en: "Conscious Care Expert!", de: "Bewusster Pflegeexperte!" },
    text: {
      tr: "Tebrikler! Diş sağlığı konusunda gündelik bilgilerin ötesinde, detaylara hakim ve bilinçli birisiniz. Bu bilgi birikiminiz, ağız sağlığınızı korumada en büyük yardımcınız olacaktır.",
      en: "Congratulations! You are knowledgeable and conscious about dental health beyond everyday information. This knowledge will be your greatest asset in protecting your oral health.",
      de: "Herzlichen Glückwunsch! Sie sind über das alltägliche Wissen hinaus sachkundig und bewusst in Bezug auf die Zahngesundheit. Dieses Wissen wird Ihr größtes Kapital beim Schutz Ihrer Mundgesundheit sein.",
    },
  },
  level3: {
    title: { tr: "Diş Sağlığı Gurusu!", en: "Dental Health Guru!", de: "Zahngesundheits-Guru!" },
    text: {
      tr: "Bravo! Bu alandaki bilginiz gerçekten etkileyici. Az bilinen ve teknik konulara bile hakimiyetiniz, sağlığınıza ne kadar değer verdiğinizi gösteriyor. Bu bilgileri çevrenizle de paylaşarak toplumsal farkındalığa büyük katkı sağlayabilirsiniz!",
      en: "Bravo! Your knowledge in this field is truly impressive. Your mastery of even little-known and technical topics shows how much you value your health. By sharing this information with those around you, you can make a great contribution to social awareness!",
      de: "Bravo! Ihr Wissen auf diesem Gebiet ist wirklich beeindruckend. Ihre Beherrschung selbst wenig bekannter und technischer Themen zeigt, wie sehr Sie Ihre Gesundheit schätzen. Indem Sie dieses Wissen mit Ihrer Umgebung teilen, können Sie einen großen Beitrag zum gesellschaftlichen Bewusstsein leisten!",
    },
  },
};