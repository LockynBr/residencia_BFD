import React, { useState } from 'react';
import {
  FaGlobe,
  FaClock,
  FaCalendarAlt,
  FaLightbulb,
  FaDesktop,
  FaPaintBrush,
} from 'react-icons/fa';

import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Switch from '../../components/ui/Switch';
import Card from '../../components/ui/Card';
import SettingItem from '../../components/ui/SettingsItem';

export default function Sistema() {
  const [language, setLanguage] = useState('Português (Brasil)');
  const [timezone, setTimezone] = useState('(GMT-03:00) Brasília');
  const [dateFormat, setDateFormat] = useState('DD/MM/AAAA');
  const [timeFormat, setTimeFormat] = useState('24 horas');
  const [showTips, setShowTips] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('5 minutos');
  const [theme, setTheme] = useState('Claro');

  return (
    <div className="p-6 bg-[var(--color-neutral-100)] flex flex-col gap-4 rounded-md">
      <Card>
        <h1 className="text-xl font-semibold mb-6">Configurações Gerais</h1>

        <SettingItem
          icon={FaGlobe}
          title="Idioma"
          description="Selecione o idioma do sistema."
        >
          <div className="w-60">
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Português (Brasil)</option>
              <option>English (United States)</option>
              <option>Español (España)</option>
              <option>Français (France)</option>
              <option>Deutsch (Deutschland)</option>
              <option>Italiano (Italia)</option>
            </Select>
          </div>
        </SettingItem>

        <SettingItem
          icon={FaClock}
          title="Fuso horário"
          description="Defina o fuso horário padrão."
        >
          <div className="w-60">
            <Select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option>(GMT-03:00) Brasília</option>
              <option>(GMT-05:00) Nova York</option>
              <option>(GMT-08:00) Los Angeles</option>
              <option>(GMT+00:00) Londres</option>
              <option>(GMT+01:00) Paris</option>
              <option>(GMT+09:00) Tóquio</option>
            </Select>
          </div>
        </SettingItem>

        <SettingItem
          icon={FaCalendarAlt}
          title="Formato de data"
          description="Escolha o formato de exibição da data."
        >
          <div className="w-60">
            <Select
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
            >
              <option>DD/MM/AAAA</option>
              <option>DD-MM-AAAA</option>
              <option>MM/DD/AAAA</option>
              <option>AAAA-MM-DD</option>
            </Select>
          </div>
        </SettingItem>

        <SettingItem
          icon={FaClock}
          title="Formato da hora"
          description="Escolha o formato de exibição da hora."
        >
          <div className="w-60">
            <Select
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
            >
              <option>24 horas</option>
              <option>12 horas (AM/PM)</option>
            </Select>
          </div>
        </SettingItem>

        <SettingItem
          icon={FaLightbulb}
          title="Exibir dicas rápidas"
          description="Mostrar dicas e sugestões dentro do sistema."
        >
          <Switch checked={showTips} onChange={setShowTips} />
        </SettingItem>

        <SettingItem
          icon={FaDesktop}
          title="Sessão automática"
          description="Encerrar a sessão após um período de inatividade."
          border={false}
        >
          <div className="w-60">
            <Select
              value={sessionTimeout}
              onChange={(e) => setSessionTimeout(e.target.value)}
            >
              <option>5 minutos</option>
              <option>10 minutos</option>
              <option>15 minutos</option>
              <option>30 minutos</option>
              <option>1 hora</option>
              <option>2 horas</option>
              <option>Nunca expirar</option>
            </Select>
          </div>
        </SettingItem>
      </Card>

      <Card>
        <h1 className="text-xl font-semibold mb-6">Aparência</h1>

        <div className="flex justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <FaPaintBrush className="text-xl text-gray-600 mt-1" />

              <div>
                <h2 className="font-medium">Tema</h2>

                <p className="text-sm text-gray-500">Selecione um tema.</p>
              </div>
            </div>
          </div>

          <div className="w-60">
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option>Claro</option>
              <option>Escuro</option>
              <option>Automático</option>
            </Select>
          </div>
        </div>
      </Card>
      <div className="flex justify-end gap-3 mt-1">
        <Button className="!w-auto px-5 text-sm !bg-transparent !text-[var(--color-danger)] border border-[var(--color-danger)] hover:!bg-[var(--color-danger)] hover:!text-white">
          Cancelar alterações
        </Button>

        <Button className="!w-auto px-5 text-sm">Salvar alterações</Button>
      </div>
    </div>
  );
}
