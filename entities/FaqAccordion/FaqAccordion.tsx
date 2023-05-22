"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";
import styles from './FaqAccordion.module.css';

export const FaqAccordion: FC = ({ ...props }): JSX.Element => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Водитель уведомит меня о начале доставки доставки?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Есть товары, которые можно купить сразу на сервисе, и товары, для
            покупки которых нужно перейти на сайт магазина. Условия их получения
            отличаются. В этом разделе описаны условия для товаров, которые
            можно купить. Также некоторые товары, которые продаются на Маркете,
            доставляются непосредственно продавцами и имеют пометку об этом. Для
            таких товаров могут быть доступны не все возможности, описанные
            ниже.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Мне нужна помощь в разгрузке товара (дополнительная услуга), что
                делать?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Заказ доставили, что то от меня требуется?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Что делать если товар не тот, или ненадлежащего качества?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                У меня крупный заказ (5 и более тонн груза), у вас есть доставка
                и разгрузка манипулятором?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Сколько времени дается на самостоятельную разгрузку товара?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem className={styles.accordionItem}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Ваша доставка опоздала, как можно помочь вам улучшить свой
                уровень сервиса?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
