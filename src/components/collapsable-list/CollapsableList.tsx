import { BulletList, CollapsibleItem, List } from '@/elements';

import { Color, findTerms, getKey } from '@/utils';

export enum DataType {
  BULLET_LIST = 'BULLET_LIST',
  LIST = 'LIST',
  OBJECT = 'OBJECT',
  TEXT = 'TEXT',
}

type ListItem = {
  title: string;
  subtitle: string;
  date: string;
  body: CollapsableListData[];
};

type CollapsableListData =
  | {
      type: DataType.BULLET_LIST | DataType.LIST;
      items: ListItem[];
      color?: Color;
    }
  | {
      type: DataType.OBJECT;
      object: Record<string, string | JSX.Element>;
    }
  | {
      type: DataType.TEXT;
      text: string;
    };

type CollapsableListItem = {
  title: string;
  content: CollapsableListData[];
};

const CollListItemClass = '';

function CollapsableListData({ item }: { item: CollapsableListData }) {
  function listItems(items: ListItem[]) {
    return items.map((item, idx) => {
      const $title = item.title && item.subtitle && (
        <div>
          <div className="font-bold flex justify-between">
            <div>{findTerms(item.title ?? '')}</div>
            <div>{item.date}</div>
          </div>
          <div className="font-semibold text-gray-400">
            {findTerms(item.subtitle ?? '')}
          </div>
        </div>
      );

      const $body = item.body.map((item, idx) => (
        <CollapsableListData key={idx} item={item} />
      ));

      return (
        <div key={idx} className="flex flex-col gap-3 p-1 pb-5">
          {$title}
          {$body}
        </div>
      );
    });
  }

  switch (item.type) {
    case DataType.BULLET_LIST:
      return (
        <BulletList color={item.color} className={`${CollListItemClass} mb-0`}>
          {listItems(item.items)}
        </BulletList>
      );
    case DataType.LIST:
      return (
        <List color={item.color} className={`${CollListItemClass} mb-0`}>
          {listItems(item.items)}
        </List>
      );
    case DataType.OBJECT:
      return (
        <div className="flex flex-col gap-4">
          {Object.entries(item.object).map(([key, value], idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-bold">{key}:</span>
              <span className="pl-2">
                {typeof value === 'string' ? findTerms(value) : value}
              </span>
            </div>
          ))}
        </div>
      );
    case DataType.TEXT:
      return <div className={CollListItemClass}>{findTerms(item.text)}</div>;
  }
}

function CollapsableListItem({ item }: { item: CollapsableListItem }) {
  const $body = item.content.map((item, idx) => (
    <CollapsableListData key={idx} item={item} />
  ));

  return <CollapsibleItem title={item.title}>{$body}</CollapsibleItem>;
}

const CollapsableListClass = 'm-2';

export function CollapsableList({
  items,
  color,
}: {
  items: CollapsableListItem[];
  color?: Color;
}) {
  return (
    <BulletList color={color} className={CollapsableListClass}>
      {items.map((item) => (
        <CollapsableListItem key={getKey(CollapsableList.name)} item={item} />
      ))}
    </BulletList>
  );
}
