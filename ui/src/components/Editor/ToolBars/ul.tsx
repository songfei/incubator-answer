/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ToolItem from '../toolItem';
import { IEditorContext } from '../types';

let context: IEditorContext;
const UL = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'editor' });
  const item = {
    label: 'unorderedList',
    keyMap: ['Ctrl-u'],
    tip: `${t('unordered_list.text')} (Ctrl+u)`,
  };

  const handleClick = (ctx) => {
    context = ctx;
    const { editor, replaceLines } = context;

    replaceLines((line) => {
      const FIND_UL_RX = /^(\s{0,})(-|\*)\s/;

      if (line.match(FIND_UL_RX)) {
        line = line.replace(FIND_UL_RX, '');
      } else {
        line = `* ${line}`;
      }
      return line;
    });
    editor.focus();
  };

  return <ToolItem {...item} onClick={handleClick} />;
};

export default memo(UL);
