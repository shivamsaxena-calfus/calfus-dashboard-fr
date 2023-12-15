import { Grid } from '@mantine/core';
import { Card, Group, Text } from '@mantine/core';

function DCard() {
  return (
    <>
      <Grid>
      
        <Grid.Col span={3}>Calfus</Grid.Col>
      
        <Grid.Col span={3}>
          <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Text fw={500}>Total Count</Text>    
              </Group>
            </Card.Section>
            <Text mt="sm" c="dimmed" size="sm">
              <Text span inherit c="var(--mantine-color-anchor)">
                90
              </Text>
            </Text>
          </Card>
        </Grid.Col>
      
        <Grid.Col span={3}>
          <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Text fw={500}>Billable</Text>    
              </Group>
            </Card.Section>
            <Text mt="sm" c="dimmed" size="sm">
              <Text span inherit c="var(--mantine-color-anchor)">
                90
              </Text>
            </Text>
          </Card>
        </Grid.Col>


          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding py="xs">
                  <Group justify="space-between">
                    <Text fw={500}>Non Billable</Text>    
                  </Group>
                </Card.Section>
                <Text mt="sm" c="dimmed" size="xl">
                  <Text span inherit c="var(--mantine-color-anchor)">
                    90
                  </Text>
                </Text>
              </Card>
          </Grid.Col>
      </Grid> 
    </>
    
  );
}


export default DCard;