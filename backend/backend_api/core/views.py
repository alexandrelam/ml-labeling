from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import Issue, ImageCoord, Report
from .serializers import issueSerializers, coordSerializers, reportSerializers

class IssueViewSet(viewsets.ModelViewSet):
    queryset = Issue.objects.all()
    serializer_class = issueSerializers

class CoordViewSet(viewsets.ModelViewSet):
    queryset = ImageCoord.objects.all()
    serializer_class = coordSerializers


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = reportSerializers