24.5. Безопасный рефакторинг
==============

### Контрольный список

+ Является ли каждое изменение частью систематичной стратегии изменений? 
+ Сохранили ли вы первоначальный код перед началом рефакторинга? 
+ Стараетесь ли вы ограничить объем каждого вида рефакторинга? 
+ Выполняете ли вы отдельные виды рефакторинга по одному за раз? 
+ Составили ли вы список действий, которые собираетесь предпринять во время рефакторинга? 
+ Ведете ли вы список видов рефакторинга, которые следовало бы выполнить позднее? 
+ Выполняете ли вы регрессивное тестирование после каждого вида рефакторинга? 
+ Выполняете ли вы обзор сложных изменений и изменений, влияющих на критически важный код? 
+ Рассматриваете ли вы рискованность отдельных видов рефакторинга и адаптируете ли вы свой подход соответствующим образом? 
+ Убеждаетесь ли вы, что изменения улучшают внутреннее качество программы, а не ухудшают его? 
+ Не рассматриваете ли вы рефакторинг как оправдание написания плохого кода или как способ избежать переписывания плохого кода? 

### Ключевые моменты

+ Изменения  программы  неизбежны  как  во  время  первоначальной  разработки, так  и  после  выпуска  первой  версии.
+ Изменения могут приводить как к улучшению, так и к ухудшению ПО. Главное Правило  Эволюции  ПО  заключается  в  том,  что  при  эволюции  кода  внутреннее  качество  программы  должно  повышаться.
+ Одним  из  условий  успешности  рефакторинга  является  пристальное  внимание к  многочисленным  предупреждающим  знакам  —  «запахам»,  указывающим  на необходимость  рефакторинга.
+ Другое  условие  —  изучение  многих  конкретных  видов  рефакторинга.
+ Заключительным  условием  успешности  рефакторинга  является  следование стратегии  безопасного  рефакторинга.  Одни  подходы  к  рефакторингу  лучше, а  другие  хуже.
+ Рефакторинг  во  время  разработки  —  самая  благоприятная  возможность  улучшения программы и внесения в нее всех изменений, которые вам так или иначе захочется  внести  позднее.  Используйте  эту  возможность!