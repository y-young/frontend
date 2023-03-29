import React from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@bangumi/design';
import { withErrorBoundary } from '@bangumi/website/components/ErrorBoundary';
import Helmet from '@bangumi/website/components/Helmet';
import { useGroup } from '@bangumi/website/hooks/use-group';

import GroupInfo from '../../components/GroupInfo';
import TopicForm from '../../components/TopicForm';
import styles from './style.module.less';

const GroupNewTopicPage = () => {
  const { name } = useParams();
  const { group: groupProfile } = useGroup(name!);
  const { group } = groupProfile;

  return (
    <>
      <Helmet title={`在${group.title}小组发表新话题`} />
      <Typography.Text type='secondary' className={styles.tipText}>
        在
        <Typography.Link to={`/group/${group.name}`} fontWeight='bold' className={styles.groupLink}>
          {group.title}
        </Typography.Link>
        发表新话题
      </Typography.Text>
      <div className={styles.grid}>
        <TopicForm groupName={group.name} />
        <div className={styles.rightColumn}>
          <GroupInfo group={group} />
        </div>
      </div>
    </>
  );
};

export default withErrorBoundary(GroupNewTopicPage, { 404: <>Group Not found</> });
